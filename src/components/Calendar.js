import React, { useRef } from 'react';
import styles from './Calendar.module.scss';
import { minsToTimeStr, dayStrs } from '../Util.js';
import { useStore } from '../stores/SelectedClassStore.js';
import { useInfoStore } from '../stores/Info.js';
import KolorWheel from 'kolorwheel';

const Calendar = (props) => {
    const startTime = 4 * 60;
    const endTime = 26 * 60;
    const step = 2 * 60;

    const timeEls = [];
    const classes = useStore(state => state.classes);
    const tasks = useInfoStore(state => state.tasks);

    const colorMap = {};
    const taskColorMap = {};

    for (var i = 0; i < classes.length; i++) {
        colorMap[classes[i].courseData.courseID] = new KolorWheel([i * 360 / classes.length, 50, 70]);
    }

    for (var i = 0; i < tasks.length; i++) {
        taskColorMap[tasks[i].name] = new KolorWheel([i * 360 / tasks.length + 100, 20, 50]);
    }
    
    for (let i = startTime; i < endTime; i += step) {
        timeEls.push(<span>{minsToTimeStr(i)}</span>);
    }

    return (<div className={styles.calendar}>
        <div className={styles.times}>
            {timeEls}
        </div>
        <div className={styles.right}>
            {
                props.data.map((day, idx) =>
                    <div className={styles.calendarItems}>
                        <div className={styles.dotw}>{dayStrs[idx+1]}</div>
                            <div className={styles.dayItems}>
                                <div className={styles.wakeItem} style={{
                                    bottom: `${100 - (props.wakeTime - startTime) / (endTime - startTime) * 100}%`
                                }}>
                                    { idx == 3 ? minsToTimeStr(props.wakeTime) : "" }
                                </div>
                                <div className={styles.sleepItem} style={{
                                    top: `${(props.sleepTime - startTime) / (endTime - startTime) * 100}%`
                                }}>
                                    { idx == 3 ? minsToTimeStr(props.sleepTime) : "" }
                                </div>
                                {
                                    day.map((item) => {
                                        let color = "grey";
                                        if (['lecture', 'recitation', 'study'].includes(item.info.type)) {
                                            color = new KolorWheel(colorMap[item.info.course]);
                                            if (item.info.type == 'recitation') {
                                                color.l += 20;
                                            }

                                            if (item.info.type == 'study') {
                                                color.s += 20;
                                            }
                                            color = color.getHex();
                                        } else if (item.info.type == 'meal') {
                                            color = '#ddd';
                                        } else if (item.info.type == 'others') {
                                            color = new KolorWheel(taskColorMap[item.name]);
                                            color = color.getHex();
                                        }
                                        return <div className={styles.item} style={{
                                                    top: `${(item.from - startTime) / (endTime - startTime) * 100}%`,
                                                    height: `${(item.to - item.from) / (endTime - startTime) * 100 - 0.5}%`,
                                                    backgroundColor: color,
                                                    color: item.info.type == 'others' ? 'white' : 'black'
                                                }}>
                                            <div className={styles.itemName}>
                                                {item.name}
                                            </div>
                                            <div className={styles.timeInfo}>
                                                {minsToTimeStr(item.from) + " – " + minsToTimeStr(item.to)}
                                            </div>
                                        </div>;
                                    })
                                }</div>
                            </div>
                        )
                    }
                </div>
            </div>);
}

export default Calendar;