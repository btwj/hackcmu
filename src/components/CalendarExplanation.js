import React, { useRef } from 'react';
import styles from './CalendarExplanation.module.scss';

const CalendarExplanation = (props) => {

    return (
        <div className={styles.explanation}>
            <div className={styles.header}>
                <h1>How was this generated?</h1>
                <p>We use a few different heuristics to plan a schedule. Remember, computers can be dumb too. Adjust the schedule to suit your needs!</p>
            </div>
            <div className={styles.card}>
                <h1 className={styles.cardHeader}>Consistent Sleep Schedule</h1>
                <p>We generate a schedule with a consistent sleep/wake time, and with at least eight hours of sleep.</p>
            </div>
            <div className={styles.card}>
                <h1 className={styles.cardHeader}>Study Breaks</h1>
                <p>We minimise back-to-back study sessions so that your productivity remains high.</p>
            </div>
            <div className={styles.card}>
                <h1 className={styles.cardHeader}>Productive Studying</h1>
                <p>Based on whether you are a day or night person, we prioritise placing study sessions either in the day or night.</p>
            </div>
            <div className={styles.card}>
                <h1 className={styles.cardHeader}>Better Weekends</h1>
                <p>Aim to have a lighter workload on the weekends.</p>
            </div>
            <div className={styles.footer}>
                <p>Made for HackCMU 2020.</p>
            </div>
        </div>
    )
};

export default CalendarExplanation;