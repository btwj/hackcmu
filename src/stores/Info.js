import create from 'zustand';
import { timeStrToMins, dayTimeToStr } from '../Util.js';

export const useInfoStore = create((set, get) => ({
    commitmentId: 0,
    commitments: [],
    addCommitment: (commitment) => {
        
        const toMins = timeStrToMins(commitment.toStr);
        const fromMins = timeStrToMins(commitment.fromStr)
        const duration = (toMins - fromMins) / 60;

        let commitmentItem = {...commitment, 
            id: get().commitmentId,
            hours: duration,
            from: fromMins,
            to: toMins,
            dayTime: dayTimeToStr([commitment.day], fromMins, toMins)
        };
        console.log('adding commitment', commitmentItem);

        set(state => ({
            commitmentId: state.commitmentId + 1,
            commitments: [...state.commitments, commitmentItem]
        }));
    },
    deleteCommitment: (commitmentId) => {
        set(state => ({
            commitments: state.commitments.filter(commitment =>
                commitment.id != commitmentId)
        }));
    },
    taskId: 0,
    tasks: [],
    addTask: (task) => {
        set(state => ({
            id: state.taskId,
            taskId: state.taskId + 1,
            tasks: [...state.tasks, task]
        }));
    },
    deleteTask: (taskId) => {
        set(state => ({
            tasks: state.tasks.filter(task => task.id != taskId)
        }));
    },
    calendarData: [[], [], [], [], [], [], []],
    setCalendarData: (data) => {
        set(state => ({calendarData: data}));
    },
    sleepTime: 22 * 60,
    wakeTime: 6 * 60,
    setSleepTime: (time) => {
        set(state => ({
            sleepTime: time
        }));
    },
    setWakeTime: (time) => {
        set(state => ({
            wakeTime: time
        }));
    }
}))