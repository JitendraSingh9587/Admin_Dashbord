import React, { useState } from 'react';
import styles from './Signin.module.css';
import Logo from '../Images/Comman/Logo.svg';
import BackgroundColorImg from '../Images/Comman/Theme Button.svg';
import Braslate from '../Images/AuthPage/Bracelet Image.svg';
import { Avatar, Button, Grid, TextField } from '@mui/material';

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlesubbmit = (e) => {
        e.preventDefault()
        console.log('email', email, 'password', password);
    }


    return (
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
    );
}

export default Signin;