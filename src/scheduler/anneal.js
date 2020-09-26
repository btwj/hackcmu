export const get_run_times = (blocks, block_assignments, unfixed) => {
    let run_times = {};

    block_assignments.map((assignment, idx) => {
        let block = blocks[idx];

        if (!(assignment in run_times)) {
            run_times[assignment] = 0;
        }

        run_times[assignment] += block.end - block.start;
    });

    return run_times;
}

export const get_loss = (calendar, blocks, block_assignments, unfixed, person_type, log) => {
    let loss = 0;
    const run_times = get_run_times(blocks, block_assignments, unfixed);

    for (const [idx, task] of unfixed.entries()) {
        const time = task.mins;
        if (task.info.type == 'rest') continue;
        if (idx in run_times) {
            if (run_times[idx] < time) {
                loss += Math.pow(run_times[idx] - time, 2) * 10;
            } else {
                loss += Math.pow(run_times[idx] - time, 2);
            }
        } else {
            loss += Math.pow(time, 2) * 50;
        }
    }

    if (log) console.log(loss);

    let current_time = 0;
    let current_day = 0;
    let current_task = 0;

    let instances = new Array(unfixed.length).fill(0);

    for (const [idx, assignment] of block_assignments.entries()) {
        const block = blocks[idx];
        if (block.day != current_day) {
            instances[current_task] += 1;
            current_day = block.day;
            for (const [id, num] of instances.entries()) {
                if (num > 1) loss += Math.pow(20 * num, 2) * 10;
            }
            current_task = assignment;
            instances = new Array(unfixed.length).fill(0);
        } else {
            if (assignment == current_task) {
            } else {
                instances[current_task] += 1;
                current_task = assignment;
            }
        }
    }

    if (log) console.log(loss);

    instances[current_task] += 1;
    for (const [id, num] of instances.entries()) {
        if (num > 1) loss += Math.pow(20 * num, 2) * 10;
    }

    current_time = 0;
    current_day = 0;

    for (const [idx, assignment] of block_assignments.entries()) {
        const block = blocks[idx];
        if (block.day >= 5 && unfixed[assignment].info.type == 'study') {
            loss += Math.pow(block.end - block.start, 2) // penalise weekend work
        }

        if (person_type == 'night' && block.start < 12 * 60 && unfixed[assignment].info.type == 'study') {
            loss += Math.pow(block.end - block.start, 2);
        }

        if (person_type == 'day' && block.start > 20 * 60 && unfixed[assignment].info.type == 'study') {
            loss += Math.pow(block.end - block.start, 2);
        }

        if (block.start < 8 * 60 && unfixed[assignment].info.type != 'rest') {
            loss += Math.pow(block.start - 8*60, 2);
        } else if (block.start > 22 * 60 && unfixed[assignment].info.type != 'rest') {
            loss += Math.pow(block.start - 21*60, 2);
        }

        if (current_day != block.day) {
            current_time = 0;
            current_day = block.day;
        }

        if (unfixed[assignment].info.type == 'study') {
            current_time += block.end - block.start;
            if (unfixed[assignment].info.type == 'study' && current_time >= 150) {
                loss += Math.pow(current_time, 2) * 10;
            }
        } else {
            current_time = 0;
        }
    }

    if (log) console.log(loss);

    return loss;
}

const get_random_task = (unfixed, rest_chance) => {
    if (Math.random() < rest_chance) {
        return 0;
    } else {
        return Math.floor(Math.random() * unfixed.length);
    }
}

const mutate = (assignments, unfixed, rest_chance) => {
    let idx = Math.floor(Math.random() * assignments.length);
    if (Math.random() < 0.5) {
        assignments[idx] = get_random_task(unfixed, rest_chance);
    } else {
        let idx2 = Math.floor(Math.random() * assignments.length);
        let t = assignments[idx];
        assignments[idx] = assignments[idx2]
        assignments[idx2] = t;
    }
}

const randomly_assign = (blocks, unfixed, rest_chance) => {
    const tasks = unfixed;
    return blocks.map(block => get_random_task(unfixed, rest_chance));
}

export const anneal = (calendar, blocks, unfixed, person_type) => {
    let total_time = 0;
    let unfixed_time = 0;

    for (const task of unfixed) {
        if ('mins' in task) {
            unfixed_time += task.mins;
        }
    }

    for (const block of blocks) {
        total_time += block.end - block.start;
    }

    let rest_chance = 1 - (unfixed_time * 1.5 / total_time);
    console.log('rest_chance', rest_chance);
    let assignments = randomly_assign(blocks, unfixed, rest_chance);
    let loss = get_loss(calendar, blocks, assignments, unfixed, person_type);
    
    for (var i = 0; i < 1; i++) {
        let new_assignments = randomly_assign(blocks, unfixed, rest_chance);
        for (var j = 0; j < 50000; j++) {
            let new_loss = get_loss(calendar, blocks, new_assignments, unfixed, person_type);
            if (new_loss < loss) {
                console.log('new best', loss, assignments, new_assignments);
                assignments = [...new_assignments];
                loss = new_loss;
            }
            new_assignments = [...assignments];
            const mutate_times = Math.floor(Math.random() * 10) + 1;
            for (var k = 0; k < mutate_times; k++) {
                mutate(new_assignments, unfixed, rest_chance);
            }
        }
    }

    return [[...assignments], loss];
}

export const consolidate_blocks = (assignments, blocks) => {
    let current_day = 0;
    let current_task = assignments[0];
    let current_start = blocks[0].start;
    let current_end = blocks[0].end;

    let new_blocks = [];
    let new_assignments = [];

    let is_continued = false;

    for (const [idx, block] of blocks.entries()) {
        const assignment = assignments[idx];
        is_continued = current_task == assignment && block.start == current_end && current_day == block.day;
        if (is_continued) {
            current_end = block.end;
        } else {
            new_blocks.push({
                day: current_day,
                start: current_start,
                end: current_end
            });
            new_assignments.push(current_task);
            current_start = block.start;
            current_end = block.end;
            current_task = assignment;
            current_day = block.day;
        }
    }

    if (is_continued) {
        new_blocks.push({
            day: current_day,
            start: current_start,
            end: current_end
        });
        new_assignments.push(current_task);
    }

    return [new_assignments, new_blocks];
}