import React, { Component } from 'react'
import styles from './Error.module.css';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
    render() {
        return (
            <div className={styles.ErrorWrapper}>
                <div className={styles.Errormsg}>
                    <h1>404</h1>
                    <h2>Oops! This Page Could Not Be Found</h2>
                    <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                    <Link to="/" >Go To Home</Link>
                </div>
            </div>
        )
    }
}
