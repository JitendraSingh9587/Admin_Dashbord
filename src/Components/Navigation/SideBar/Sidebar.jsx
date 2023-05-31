import React from 'react'
import styles from './Sidebar.module.css'
import Dashbord from '../../Images/Sidebar/dashbord.svg'

function Sidebar() {
    return (
        <div className={styles.SidebarWrapper}>
            <div className={styles.SidebarContainer}>

                <div className={styles.SidebarBtnWrapper}>
                    <div className={styles.SidebarBtnWrapperImage}>
                        <img src={Dashbord} alt="" />
                    </div>
                    <div className={styles.SidebarBtnWrapperText}>Dashboard</div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar