import React from 'react';
import styles from './Signin.module.css';
import Logo from '../Images/Comman/Logo.svg';
import BackgroundColorImg from '../Images/Comman/Theme Button.svg';
import Braslate from '../Images/AuthPage/Bracelet Image.svg';
import { Avatar, Button, Grid, TextField } from '@mui/material';

function Signin() {
    return (
        <div className={styles.Authentication_Page_Wrapper}>
            <Grid container className={styles.AuthWrapperGrid}>
                <Grid className={styles.GridItems} item xs={6}>
                    <div>
                        <Avatar
                            src={BackgroundColorImg}
                            className={styles.BgButton}
                            sx={{ width: 50, height: 50 }}
                        />
                        <div className={styles.AuthPageLeftImageWrapper}>
                            <Avatar
                                src={Braslate}
                                sx={{ width: 731, height: 622 }}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid className={styles.GridItems} item xs={6}>
                    <div className={styles.LoginFormWrapper}>
                        <div className={styles.LoginWrapper}>
                            <Avatar
                                src={Logo}
                                sx={{ width: 246, height: 82 }}
                            />
                            <h1 className={styles.LoginTextHeading}>Login</h1>
                            <div className={styles.samllBreaker}></div>
                            <p className={styles.Signintext}>Sign into your account</p>
                            <form>
                                <div className={styles.InputWrapper}>
                                    <TextField className={styles.InputFiledsLogin} label="Email" variant="outlined" fullWidth />
                                </div>
                                <div className={styles.InputWrapper}>
                                    <TextField className={styles.InputFiledsLogin} label="Password" variant="outlined" fullWidth />
                                </div>
                                <Button className={styles.LoginBtn} variant="contained">Login</Button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Signin;