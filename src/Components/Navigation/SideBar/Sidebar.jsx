import React from 'react'
import styles from './Sidebar.module.css'
import Dashbord from '../../Images/Sidebar/dashbord.svg'
import AppInstalled from '../../Images/Sidebar/AppInstalled.svg'
import guardian from '../../Images/Sidebar/guardian.svg'
import guardianNumber from '../../Images/Sidebar/guardianNumber.svg'
import connectsafe from '../../Images/Sidebar/connectsafe.svg'
import activity from '../../Images/Sidebar/activity.svg'
import alarm from '../../Images/Sidebar/alarm.svg'
import alarmRecived from '../../Images/Sidebar/alarmRecived.svg'
import Gloabe from '../../Images/Sidebar/Gloabe.svg'

const SidebarData = [
    {
        name: "Dashboard",
        Img: Dashbord
    },
    {
        name: "User App Installed",
        Img: AppInstalled
    },
    {
        name: "User have guardian",
        Img: guardian
    },
    {
        name: "number of guardian",
        Img: guardianNumber
    },
    {
        name: "user connect safe",
        Img: connectsafe
    },
    {
        name: "user last week activity",
        Img: activity
    },
    {
        name: "send out alarm",
        Img: alarm
    },
    {
        name: "received alarm",
        Img: alarmRecived
    },
    {
        name: "user per country",
        Img: Gloabe
    },
]

function Sidebar() {
    return (
        <div className={styles.SidebarWrapper}>
            <div className={styles.SidebarContainer}>
                {SidebarData.map((item, key) => (

                    <div key={key} className={styles.SidebarBtnWrapper}>
                        <div className={styles.SidebarBtnWrapperImage}>
                            <img src={item.Img} alt="" />
                        </div>
                        <div className={styles.SidebarBtnWrapperText}>{item.name}</div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Sidebar