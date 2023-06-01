import React, { useContext } from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import styles from './ProfilePage.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import { Grid, TextField } from '@mui/material'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { UserNavData } from '../Routers/AuthRoutesWrapper'
import editimage from '../Images/Comman/Edit.svg'
import EditPencil from '../Images/Comman/EditPencil.svg'
import userimage from '../Images/Comman/user.svg'


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
                                <div className={styles.ImageWrapperContainer}>
                                    <div className={styles.UserimageWrapper}>
                                        <img src={userdata.image ? userdata.image : userimage} alt="user" />
                                    </div>
                                    <div className={styles.editIconwrapper}>
                                        <img className={styles.editlogo} src={editimage} alt="edit" />
                                    </div>
                                </div>
                                <span className={styles.sidebracker}></span>
                                <div className={styles.userinfo}>
                                    <h5>{userdata.name}</h5>
                                    <h6>{userdata.email}</h6>
                                </div>
                            </div>
                            <div className={styles.UserinputWrapper}>
                                <div className={styles.UserinputDisabled}>
                                    <TextField className={styles.UserDisableInputFiled} value={userdata.name} label="Name" variant="outlined" type='email' fullWidth required disabled />
                                </div>
                                <div className={styles.UserinputDisabled}>
                                    <TextField className={styles.UserDisableInputFiled} value={userdata.email} label="Email" variant="outlined" type='email' fullWidth required disabled />
                                </div>
                                <div className={styles.editUserDetailsWrapper}>
                                    <div className={styles.edituserPencil}>
                                        <img src={EditPencil} alt="" />
                                    </div>
                                    <span>Edit Details</span>
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