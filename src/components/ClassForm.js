import React, { useRef } from 'react';
import Select from 'react-select';
import styles from './ClassForm.module.scss';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useStore } from '../stores/SelectedClassStore.js';
import { useDataStore } from '../stores/Data.js';
import { dayTimeToStr, timeStr12HrToMins } from '../Util.js';

// TODO: Delete Class

const SelectedClass = (props) => {
    const deleteClass = useStore(state => state.deleteClass);
    const updateLecture = useStore(state => state.updateLecture);

    const onClick = () => {
        console.log('deleting', props.courseNumber);
        deleteClass(props.courseNumber);
    }

    const onSelect = (e) => {
        console.log('selecting', e.target.value);
        updateLecture(props.courseNumber, e.target.value);
    }

    return (
        <div className={styles.selectedClass}>
            <div className={styles.delete} onClick={onClick}><FaTimes /></div>
            <div>
                <div className={styles.classHeader}>
                    <span className={styles.courseNumber}>{props.courseNumber}</span>
                    {
                        props.section ? <span className={styles.section}>{props.section}</span> : ''
                    }  
                    <span className={styles.courseName}>{props.courseName}</span>
                    <div className={styles.dayTime}>
                        <select className={styles.lecture} value={props.lecture}
                         onChange={onSelect}>
                        {
                            props.lectureDayTimes.map(lectureDayTime => 
                                <option value={lectureDayTime.idx}>
                                    {lectureDayTime.name} – {lectureDayTime.dayTimeStr}
                                </option>
                            )
                        }
                        </select>
                        <div className={styles.recitation}>{props.dayTime}</div>
                    </div>
                    
                </div>
                <div className={styles.timeInfo}>
                    <div className={styles.units}>{props.units} units</div>
                    <div className={styles.extraTime}>{props.extraTime} extra hours</div>
                </div>
            </div>
        </div>
    )
}

const ClassForm = (props) => {
    const classInput = useRef();
    
    const classes = useStore(state => state.classes);
    const addClass = useStore(state => state.addClass);
    const fceData = useDataStore(state => state.fceData);
    const getFceData = useDataStore(state => state.getFceData);

    getFceData(); // Don't know why can't get this to call in Promise

    const inputClass = async () => {
        const classValue = classInput.current.value;
        classInput.current.value = "";
        const [courseNumber, sectionName] = classValue.split(" ");

        for (var addedClass of classes) {
            if (addedClass.courseData.courseID == courseNumber) return; //course already added
        }

        try {
            let [courseResponse, _] = await Promise.all([
                fetch(`https://apis.scottylabs.org/course/courses/courseID/${courseNumber}`, {
                    method: 'GET'
                }), getFceData()]);
            
            let courseData = await courseResponse.json();
            let sectionFound = false;

            let lectures = courseData.lectures;
            let lectureDayTimes = [];
            let lectureTime = 0;
            for (const [idx, lecture] of lectures.entries()) {
                const from = timeStr12HrToMins(lecture.times[0].begin);
                const to = timeStr12HrToMins(lecture.times[0].end)
                lectureTime = lecture.times[0].days.length * (to - from);
                lectureDayTimes.push({
                    idx: idx,
                    name: lecture.name,
                    dayTimeStr: dayTimeToStr(lecture.times[0].days, from, to)
                });
            }
            console.log('lecture time', lectureTime);
            let sectionTime = 0;

            if (courseData.sections.length == 0) {
                let courseIdWithoutDash = courseNumber.replace('-', '');
                if (courseIdWithoutDash in fceData) {
                    const extraMins = fceData[courseIdWithoutDash].hrs * 60 - lectureTime;
                    const extraHours = Math.floor(extraMins / 60 / 3 * 2);

                    addClass({courseData,
                        dayTime: '',
                        lecture: 0,
                        extraTime: extraHours,
                        lectureTime: lectureTime, lectureDayTimes: lectureDayTimes,
                        fceData: fceData[courseIdWithoutDash]});
                } else {
                    addClass({courseData,
                        dayTime: '',
                        extraTime: 0,
                        lecture: 0,
                        lectureTime: lectureTime, lectureDayTimes: lectureDayTimes});
                }
            } else {
                for (const section of courseData.sections) {
                    if (section.name == sectionName) {
                        sectionFound = true;
                        let courseIdWithoutDash = courseNumber.replace('-', '');
    
                        const from = timeStr12HrToMins(section.times[0].begin);
                        const to = timeStr12HrToMins(section.times[0].end);
                        const days = section.times.map(time => time.days).flat(1);
    
                        sectionTime = days.length * (to - from);
                        
                        if (courseIdWithoutDash in fceData) {
                            const extraMins = fceData[courseIdWithoutDash].hrs * 60 - (sectionTime + lectureTime);
                            const extraHours = Math.floor(extraMins / 60 / 3 * 2);
    
                            addClass({courseData, sectionData: section,
                                dayTime: dayTimeToStr(days, from, to),
                                section: section.name, lecture: 0,
                                extraTime: extraHours,
                                lectureTime: lectureTime, lectureDayTimes: lectureDayTimes,
                                fceData: fceData[courseIdWithoutDash]});
                        } else {
                            addClass({courseData,
                                dayTime: dayTimeToStr(days, from, to),
                                section: section.name,
                                extraTime: 0,
                                lecture: 0,
                                lectureTime: lectureTime, lectureDayTimes: lectureDayTimes});
                        }
                    }
                }

            }

            if (!sectionFound) {
                console.log('no section found');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (<div>
        <div className={styles.input}>
            <input placeholder="Number & Section, e.g. 01-234 B, or just Number if only lectures" ref={classInput}></input>
            <div onClick={inputClass}><FaPlus /></div>
        </div>
        <h4>Added Classes ({classes.length})</h4>
        <div className={styles.selected}>
            {
                classes.map(({courseData, lectureDayTimes, section, dayTime, extraTime}) =>
                    <SelectedClass courseNumber={courseData.courseID} section={section}
                                   courseName={courseData.name} key={courseData.courseID}
                                   lectureDayTimes={lectureDayTimes} dayTime={dayTime}
                                   units={courseData.units} extraTime={extraTime}/>
                )
            }
        </div>
    </div>);
}

export default ClassForm;