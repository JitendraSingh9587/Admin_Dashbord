import React from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { Grid } from '@mui/material'

function HomePage() {

    return (
        <>
            <Navbar />
            <Grid container className={CommanCss.GridWrapper}>
                <Grid item xs={1.9}>
                    <Sidebar />
                </Grid >
                <Grid item xs={10.1}>

                </Grid >
            </Grid>
        </>
    )
}

export default HomePage