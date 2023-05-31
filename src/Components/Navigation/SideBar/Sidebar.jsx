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
import { NavLink } from 'react-router-dom'

const SidebarData = [
    {
        name: "Dashboard",
        Img: Dashbord,
        to: "/dashboard"
    },
    {
        name: "User App Installed",
        Img: AppInstalled,
        to: "/appinstalled"
    },
    {
        name: "User have guardian",
        Img: guardian,
        to: "/guardian"
    },
    {
        name: "number of guardian",
        Img: guardianNumber,
        to: "/numberofguardian"
    },
    {
        name: "user connect safe",
        Img: connectsafe,
        to: "/connectsafe"
    },
    {
        name: "user last week activity",
        Img: activity,
        to: "/activity"
    },
    {
        name: "send out alarm",
        Img: alarm,
        to: "/alarm"
    },
    {
        name: "received alarm",
        Img: alarmRecived,
        to: "/alarmrecived"
    },
    {
        name: "user per country",
        Img: Gloabe,
        to: "/country"
    },
]

function Sidebar() {
    return (
        <div className={styles.SidebarWrapper}>
            <div className={styles.SidebarContainer}>
                <nav id="sidebar">
                    {SidebarData.map((item, key) => (
                        <NavLink to={item.to} key={key} className={styles.SidebarBtnWrapper}>
                            <div className={styles.SidebarBtnWrapperImage}>
                                <img src={item.Img} alt="" />
                            </div>
                            <div className={styles.SidebarBtnWrapperText}>{item.name}</div>
                        </NavLink>
                    ))}
                </nav>

            </div>

        </div >
    )
}

export default Sidebar