import React, { useRef } from 'react';
import Select from 'react-select';
import styles from './CommitmentForm.module.scss';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { useInfoStore } from '../stores/Info.js';

// TODO: Delete Class

const Commitment = (props) => {
    const deleteCommitment = useInfoStore(state => state.deleteCommitment);

    const onClick = () => {
        console.log('deleting commitment', props.id);
        deleteCommitment(props.id);
    }

    return (
        <div className={styles.commitment}>
            <div className={styles.delete} onClick={onClick}><FaTimes /></div>
            <div>
                <div className={styles.header}>
                    <span className={styles.name}>{props.name}</span>
                    <div className={styles.dayTime}>{props.dayTime}</div>
                </div>
                <div className={styles.timeInfo}>{props.hours} hours</div>   
            </div>
        </div>
    )
}

const CommitmentForm = (props) => {
    const commitmentInput = useRef();
    const fromInput = useRef();
    const toInput = useRef();
    const dayInput = useRef();

    const dayOfTheWeekOptions = [
        { value: 0, label: 'Monday' },
        { value: 1, label: 'Tuesday' },
        { value: 2, label: 'Wednesday' },
        { value: 3, label: 'Thursday' },
        { value: 4, label: 'Friday' },
        { value: 5, label: 'Saturday' },
        { value: 6, label: 'Sunday' }
    ]
    
    const commitments = useInfoStore(state => state.commitments);
    const addCommitment = useInfoStore(state => state.addCommitment);

    const inputClass = () => {
        try {
            const commitmentName = commitmentInput.current.value;
            const fromStr = fromInput.current.value;
            const toStr = toInput.current.value;
            const day = dayInput.current.state.value.value;
            fromInput.current.value = "";
            toInput.current.value = "";
            commitmentInput.current.value = "";
            addCommitment({name: commitmentName, fromStr, toStr, day});
        } catch {

        }
    }

    return (<div>
        <div className={styles.timeInput}>
            <Select className={styles.select} options={dayOfTheWeekOptions} ref={dayInput}/>
            <label>from</label>
            <input ref={fromInput} className={styles.from} type="time" step="1800"/>
            <label>to</label>
            <input ref={toInput} className={styles.to} type="time" step="1800" />
        </div>
        <div className={styles.input}>
            <input placeholder="e.g. Club GBM" ref={commitmentInput}></input>
            <div className={styles.add} onClick={inputClass}><FaPlus /></div>
        </div>
        <h4>Added Commitments ({commitments.length})</h4>
        <div className={styles.selected}>
            {
                commitments.map(commitment =>
                    <Commitment name={commitment.name} dayTime={commitment.dayTime}
                                hours={commitment.hours} key={commitment.id} id={commitment.id}/>
                )
            }
        </div>
    </div>);
}

export default CommitmentForm;