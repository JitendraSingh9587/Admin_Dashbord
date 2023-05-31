import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css';
import BackgroundColorImg from '../../Images/Comman/Theme Button.svg';
import BackgroundColorImgDark from '../../Images/Comman/ThemeDarkBtn.svg';
import Logo from '../../Images/Comman/Logo.svg';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
import Cookies from 'universal-cookie';
import { UserNavData } from '../../Routers/AuthRoutesWrapper';


function Navbar() {
    const [bgColor, setbgColor] = useState(false)
    const [userOptions, setUserOptions] = useState(false)
    const [waitLoader, setWaitLoader] = useState(false)

    // useContext for navbar data
    const Userdata = useContext(UserNavData)

    // UseNavigate in varibale
    const navigate = useNavigate()

    // Navigate to Home page
    const NavigateHome = () => {
        navigate("/home")
    }

    // Background Color Function
    const bgColorBtn = () => {
        setbgColor(!bgColor)
        if (bgColor === true) {
            document.querySelector('body').style.background = "#fff";
        }
        else if (bgColor === false) {
            document.querySelector('body').style.background = "#5A5A5A";
        }
    }

    // Edit and Logout wrapper hide and show function
    const EditLogoutAction = () => {
        setUserOptions(!userOptions)
    }

    // Logout Function
    const Logout = () => {
        const cookies = new Cookies();
        setWaitLoader(true)
        setUserOptions(false)
        setTimeout(() => {
            cookies.remove("loggedin") // Removing Cookies From local storage
            cookies.remove("redirect") // Removing Cookies From local storage
            setWaitLoader(false)
            navigate("/")
        }, 1000);
    }

    return (
        <>
            {waitLoader && <CircularLoader />}
            <div className={styles.NavbarWrapper}>
                <div>
                    <div className={styles.Bgcolorwrapper}>
                        <img onClick={bgColorBtn} src={bgColor === true ? BackgroundColorImgDark : BackgroundColorImg} alt="img" />
                    </div>
                </div>
                <div>
                    <div className={styles.NavbarlogoWrapper}>
                        <img onClick={NavigateHome} src={Logo} alt="logo" />
                    </div>
                </div>
                <div>
                    <div className={styles.UserInfoNavbar}>
                        <div className={styles.userInfoWrapper}>
                            <h1>{Userdata.name}</h1>
                            <Avatar src={Userdata.image} onClick={EditLogoutAction} className={styles.avatarnavbar} sx={{ width: 35, height: 35 }} />
                        </div>
                        {userOptions && <div className={styles.LogoutEditPositionWrapper}>
                            <div className={styles.userEditLogoutWrapper}>
                                <button>Edit</button>
                                <button onClick={Logout}>Log Out</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar