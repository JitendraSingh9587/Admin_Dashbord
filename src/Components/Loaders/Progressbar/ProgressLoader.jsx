import React from 'react'
import styles from './ProgressLoader.module.css';


function ProgressLoader() {
    return (
        <>
            <div className={styles.loader}>
                <div className={styles.lights}>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                    <span className={styles.light}></span>
                </div>
            </div>

        </>
    )
}

export default ProgressLoader