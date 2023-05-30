import React from 'react'
import styles from './CircularLoader.module.css';

function CircularLoader() {
    return (
        <div className={styles.circularloader}><div className={`${styles.loader} ${styles.circles}`}></div></div>
    )
}

export default CircularLoader