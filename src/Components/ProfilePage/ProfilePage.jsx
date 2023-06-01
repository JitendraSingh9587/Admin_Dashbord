import React, { useContext } from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import styles from './ProfilePage.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import { Grid } from '@mui/material'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { UserNavData } from '../Routers/AuthRoutesWrapper'


function ProfilePage() {
    // useContext for navbar data
    const { userdata } = useContext(UserNavData)
    return (
        <>
            <Navbar />
            <Grid container className={CommanCss.GridWrapper}>
                <Grid item xl={2.1} sm={2.3}>
                    <Sidebar />
                </Grid >
                <Grid item xl={9.9} sm={9.7}>
                    <>
                        <div className={styles.ProfileWrapper}>
                            <h1>Profile Details</h1>
                            <div className={styles.UserImageDataWrapper}>
                                <div className={styles.UserimageWrapper}>
                                    <img src={userdata.image} alt="user" />
                                </div>
                                <span className={styles.sidebracker}></span>
                                <div className={styles.userinfo}>
                                    <h5>{userdata.name}</h5>
                                    <h6>{userdata.email}</h6>
                                </div>
                            </div>
                        </div>
                    </>
                </Grid >
            </Grid>
        </>
    )
}

export default ProfilePage