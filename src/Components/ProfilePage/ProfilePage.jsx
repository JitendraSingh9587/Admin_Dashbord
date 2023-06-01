import React, { useContext, useState } from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import styles from './ProfilePage.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { UserNavData } from '../Routers/AuthRoutesWrapper'
import editimage from '../Images/Comman/Edit.svg'
import EditPencil from '../Images/Comman/EditPencil.svg'
import userimage from '../Images/Comman/user.svg'
import closeimage from '../Images/Comman/Close button.svg'


function ProfilePage() {
    // useContext for navbar data
    const { userdata } = useContext(UserNavData)

    const [open, setOpen] = useState(false)
    const [useredit, setuseredit] = useState({
        name: userdata.name,
        email: userdata.email
    })

    // Modal Close Function
    const handleClose = () => {
        setOpen(false)
    }

    // Modal open Function
    const handleopen = () => {
        setOpen(true)
    }

    // handle edit name
    const handleNameChange = (e) => {
        setuseredit(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    }
    // handle edit Email
    const handleEmailChange = (e) => {
        setuseredit(prevState => ({
            ...prevState,
            email: e.target.value
        }));
    }
    // handle Update 
    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(useredit);
        setOpen(false)
    }

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
                                <div onClick={handleopen} className={styles.editUserDetailsWrapper}>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className={styles.modalBox}>
                    <div className={styles.modalheaderWrappper}>
                        <h2>Edit Details</h2>
                        <div onClick={handleClose} className={styles.closeIcon}><img src={closeimage} alt="close" /></div>
                    </div>
                    <div className={styles.ModalInputWrapper}>
                        <div className={styles.UserinputModal}>
                            <TextField onChange={handleNameChange} className={styles.UserDisableInputFiled} defaultValue={userdata.name} label="Name" variant="outlined" type='email' fullWidth required />
                        </div>
                        <div className={styles.UserinputModal}>
                            <TextField onChange={handleEmailChange} className={styles.UserDisableInputFiled} defaultValue={userdata.email} label="Email" variant="outlined" type='email' fullWidth required />
                        </div>
                    </div>
                    <div className={styles.Footerbtns}>
                        <Button onClick={handleUpdate} className={styles.footerbtnupdate}>Update</Button>
                        <Button onClick={handleClose} className={styles.footerbtncancel}>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProfilePage