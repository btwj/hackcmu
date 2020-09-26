const chop_block = (block) => {
    if (block.end - block.start <= 30) {
        return [];
    } else if (block.end - block.start <= 90) {
        return [block]
    } else {
        return [{start: block.start, end: block.start + 60}, 
            ...chop_block({start: block.start + 60, end: block.end})];
    }
}

export const blockify = (calendar, wake_min, sleep_min) => {
    for (const day of calendar) {
        day.sort((a, b) => {
            return a.from - b.from;
        });
    }

    return calendar.map((day, day_idx) => {
        let cur_time = wake_min;
        let blocks = [];

        for (const event of day) {
            if (event.from - cur_time <= 20) {
                cur_time = event.to;
                continue;
            }

            blocks.push({ start: cur_time, end: event.from });
            cur_time = event.to;
        }

        blocks.push({ start: cur_time, end: sleep_min });

        let split_blocks = [];
        for (const block of blocks) {
            split_blocks = split_blocks.concat(chop_block(block));
        }

        return split_blocks;
    });
}