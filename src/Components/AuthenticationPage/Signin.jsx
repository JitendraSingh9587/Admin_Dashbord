import React, { useState } from 'react';
import styles from './Signin.module.css';
import Logo from '../Images/Comman/Logo.svg';
import BackgroundColorImg from '../Images/Comman/Theme Button.svg';
import Braslate from '../Images/AuthPage/Bracelet Image.svg';
import { Alert, Avatar, Button, Grid, Snackbar, TextField } from '@mui/material';



function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const [erroropen, setErrorpen] = useState(false)

    const horizontal = "right"
    const vertical = "top"

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlesubbmit = (e) => {
        e.preventDefault()
        if (email === "jitendra@singh.com" && password === "jitendra@singh.com") {
            console.log('email', email, 'password', password);
            setOpen(true);
        }
        else {
            console.log("false");
            setErrorpen(true)
        }
    }

    const handleClose = () => {
        setOpen(false);
        setErrorpen(false)
    };

    return (
        <>
            <div className={styles.Authentication_Page_Wrapper}>
                <Grid container className={styles.AuthWrapperGrid}>
                    <Grid className={` ${styles.GridItems} ${styles.MobileViewNone}`} item lg={6} md={5} sm={12}>
                        <Avatar
                            src={BackgroundColorImg}
                            className={styles.BgButton}
                            sx={{ width: 50, height: 50 }}
                        />
                        <div className={styles.Watchimagewrapper}>
                            <div className={styles.AuthPageLeftImageWrapper}>
                                <img
                                    src={Braslate}
                                    alt='img'
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid className={styles.GridItems} item lg={6} md={7} sm={12}>
                        <div className={styles.LoginFormWrapper}>
                            <div className={styles.LoginWrapper}>
                                <Avatar
                                    src={Logo}
                                    sx={{ width: 246, height: 82 }}
                                />
                                <h1 className={styles.LoginTextHeading}>Login</h1>
                                <div className={styles.samllBreaker}></div>
                                <p className={styles.Signintext}>Sign into your account</p>
                                <form onSubmit={handlesubbmit}>
                                    <div className={styles.InputWrapper}>
                                        <TextField onChange={handleEmailChange} className={styles.InputFiledsLogin} label="Email" variant="outlined" type='email' fullWidth required />
                                    </div>
                                    <div className={styles.InputWrapper}>
                                        <TextField onChange={handlePasswordChange} className={styles.InputFiledsLogin} label="Password" variant="outlined" type='password' fullWidth required />
                                    </div>
                                    <Button type='submit' className={styles.LoginBtn} variant="contained">Login</Button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* Success Snackbar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your credentials are correct. The login process has begun.
                </Alert>
            </Snackbar>
            {/* Error Snackbar */}
            <Snackbar open={erroropen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    The provided credentials are incorrect.
                </Alert>
            </Snackbar>
        </>
    );
}

export default Signin;