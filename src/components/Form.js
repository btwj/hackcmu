import React, { useRef } from 'react';
import Select from 'react-select';
import styles from './Form.module.scss';
import ClassForm from './ClassForm.js';
import CommitmentForm from './CommitmentForm.js';
import TaskForm from './TaskForm.js';
import { useStore } from '../stores/SelectedClassStore.js';
import { useInfoStore } from '../stores/Info.js';
import { useDataStore } from '../stores/Data.js';
import { timeStr12HrToMins } from '../Util.js';
import { blockify } from '../scheduler/blockify.js';
import { assign_meals } from '../scheduler/meal.js';
import { anneal, consolidate_blocks, get_run_times, get_loss } from '../scheduler/anneal.js';
import { getSleep } from '../scheduler/sleep.js'

const Form = (props) => {
    const typeOptions = [
        { value: 'day', label: '☀️ Day' },
        { value: 'night', label: '🌙 Night' }
    ];

    const selectedClasses = useStore(state => state.classes);
    const tasks = useInfoStore(state => state.tasks);
    const commitments = useInfoStore(state => state.commitments);

    const setCalendarData = useInfoStore(state => state.setCalendarData);
    const setSleepTime = useInfoStore(state => state.setSleepTime);
    const setWakeTime = useInfoStore(state => state.setWakeTime);

    const typeInput = useRef();

    const consolidateStores = () => {
        return {
            selectedClasses, tasks, commitments
        }
    }

    const makeSchedule = () => {
        const type = typeInput.current?.state?.value?.value;

        if (type === undefined) {
            console.log('no type');
        }
        
        const {selectedClasses, tasks, commitments} = consolidateStores();

        let fixed = [];
        let unfixed = [{
            name: 'Rest',
            info: {
                type: 'rest',
            }
        }];

        for (let i = 0; i < 7; i++) {
            fixed.push([]);
        }

        console.log('selectedClasses', selectedClasses);
        console.log('tasks', tasks);
        console.log('commitments', commitments);

        for (const selectedClass of selectedClasses) {
            if ('sectionData' in selectedClass) {
                for (const time of selectedClass.sectionData.times) {
                    const from = timeStr12HrToMins(time.begin);
                    const to = timeStr12HrToMins(time.end);
                    const days = time.days;

                    console.log(from, to, days);

                    for (const day of days) {
                        fixed[day-1].push({
                            data: selectedClass,
                            info: {
                                type: 'recitation',
                                course: selectedClass.courseData.courseID
                            },
                            name: `${selectedClass.courseData.courseID} ${selectedClass.section}`,
                            from: from,
                            to: to
                        });
                    }
                }
            }

            const lecture = selectedClass.courseData.lectures[selectedClass.lecture]
            for (const time of lecture.times) {
                const from = timeStr12HrToMins(time.begin);
                const to = timeStr12HrToMins(time.end);
                for (const day of time.days) {
                    fixed[day-1].push({
                        data: selectedClass,
                        info: {
                            type: 'lecture',
                            course: selectedClass.courseData.courseID
                        },
                        name: `${selectedClass.courseData.courseID} ${lecture.name}`,
                        from: from,
                        to: to
                    });
                }
            }

            if ('extraTime' in selectedClass && selectedClass.extraTime != 0) {
                unfixed.push({
                    info: { type: 'study', course: selectedClass.courseData.courseID },
                    name: `${selectedClass.courseData.courseID} HW`,
                    mins: selectedClass.extraTime * 60
                });
            }
        }

        for (const commitment of commitments) {
            fixed[commitment.day].push({
                data: commitment,
                info: {
                    type: 'commitment',
                    id: commitment.id
                },
                name: commitment.name,
                from: commitment.from,
                to: commitment.to
            })
        }

        for (const task of tasks) {
            unfixed.push({
                name: task.name,
                mins: task.hours * 60,
                info: {
                    type: 'others'
                }
            });
        }

        setCalendarData(fixed);
        console.log('unfixed', unfixed);
        const [sleep, wake] = getSleep(fixed, type);

        console.log('sleep', sleep - 30, 'wake', wake + 30);
        setWakeTime(wake);
        setSleepTime(sleep);
        let blocks = blockify(fixed, wake + 30, sleep - 30);
        let [meal_blocks, new_blocks] = assign_meals(blocks);
        let [assignments, loss] = anneal(fixed, new_blocks, unfixed, type);
        console.log(get_loss(fixed, new_blocks, assignments, unfixed, type, true));
        [assignments, new_blocks] = consolidate_blocks(assignments, new_blocks);
        for (const [day_idx, day] of meal_blocks.entries()) {
            fixed[day_idx].push({
                info: {
                    type: 'meal',
                },
                name: 'Lunch',
                from: day[0].start,
                to: day[0].end
            });

            fixed[day_idx].push({
                info: {
                    type: 'meal',
                },
                name: 'Dinner',
                from: day[1].start,
                to: day[1].end
            });
        }

        for (const [idx, assignment] of assignments.entries()) {
            const block = new_blocks[idx];
            if (unfixed[assignment].info.type == 'rest') continue;
            fixed[block.day].push({
                info: unfixed[assignment].info,
                name: unfixed[assignment].name,
                from: block.start,
                to: block.end
            });
        }

        console.log(fixed);
        setCalendarData(fixed);
        console.log(loss);
    }

    return (
        <div className={styles.form}>
            <div className={styles.header}>
                <div className={styles.quote}>
                    “I feel the need; the need for <strong>sleep</strong>.”
                </div>
                <h1>🗓️ CMU Schedule Helper</h1>
                
                <p>
                    To all CMU students, we know the pain of scheduling, especially with remote and online classes being the norm now due to COVID-19. This schedule maker helps you make a well-balanced schedule: classes, study, meals, relaxation and at least 8 hours of sleep every day, so you can make the most of your time.
                </p>

                <p>Let's get started with a few questions.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.question}>Are you a day or night person?</div>
                <p>We'll use this to plan your relaxation and work time slots so you can be the most productive!</p>
                <Select options={typeOptions} ref={typeInput}/>
            </div>
            <div className={styles.card}>
                <div className={styles.question}>What classes are you taking?</div>
                <p>We'll automatically fill in your lecture and recitation times, and use FCE data to predict how much study time you'll need.</p>
                <ClassForm />
            </div>
            <div className={styles.card}>
                <div className={styles.question}>What fixed commitments do you have?</div>
                <p>This could be meetings, club sessions or other commitments that recur every week.</p>
                <CommitmentForm />
            </div>
            <div className={styles.card}>
                <div className={styles.question}>What else do you need to get done each week?</div>
                <p>Just put things you'd like to dedicate some time to each week, like practicing an instrument or exercising.</p>
                <TaskForm />
            </div>
            <div className={styles.button} onClick={makeSchedule}>
                Generate a Schedule ↓
            </div>
        </div>
    )
};

export default Form;