import React, { useRef } from 'react';
import Select from 'react-select';
import styles from './TaskForm.module.scss';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useInfoStore } from '../stores/Info.js';

// TODO: Delete Class

const Task = (props) => {
    const deleteTask = useInfoStore(state => state.deleteTask);

    const onClick = () => {
        console.log('deleting commitment', props.id);
        deleteTask(props.id);
    }

    return (
        <div className={styles.task}>
            <div className={styles.delete} onClick={onClick}><FaTimes /></div>
            <div>
                <div className={styles.header}>
                    <span className={styles.name}>{props.name}</span>
                </div>
                <div className={styles.timeInfo}>{props.hours} hours</div>   
            </div>
        </div>
    );
}

const TaskForm = (props) => {
    const taskInput = useRef();
    const hoursInput = useRef();

    const tasks = useInfoStore(state => state.tasks);
    const addTask = useInfoStore(state => state.addTask);
    
    const inputTask = () => {
        const taskName = taskInput.current.value;
        const hours = hoursInput.current.value;

        taskInput.current.value = "";
        hoursInput.current.value = "";

        addTask({ name: taskName, hours });
    }

    return (
    <div>
        <div className={styles.input}>
            <input placeholder="e.g. Exercise" ref={taskInput} className={styles.inputName}></input>
            <input placeholder="hours per week" ref={hoursInput} type="number" className={styles.inputHours} min="0" step="0.25"></input>
            <div className={styles.add} onClick={inputTask}><FaPlus /></div>
        </div>
        <h4>Added Tasks ({tasks.length})</h4>
        <div className={styles.selected}>
            {
                tasks.map(task => <Task name={task.name} hours={task.hours} key={task.id} id={task.id}/>)
            }
        </div>
    </div>);
}

export default TaskForm;