import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className={styles.footerWrapper}>
                <div className={styles.copyrighttext}>Copyright @ 2023 Safelet. All rights reserved.</div>
                <div className={styles.TermsandPrivacy}>
                    <sapn>Terms of Use</sapn>
                    <sapn className={styles.termsandprivacybreacker}></sapn>
                    <sapn>Privacy Policy</sapn>
                </div>
                <div className={styles.githubAccount}>Hand Crafted & made by <Link target='_blank' to="https://github.com/JitendraSingh9587">Github</Link></div>
            </div>
        </>
    )
}

export default Footer