import React from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { Grid } from '@mui/material'

function HomePage() {

    return (
        <>
            <Navbar />
            <Grid container className={CommanCss.Wrapper}>
                <Grid item xs={1.7}>
                    <div className={CommanCss.SidebarWrapper}>
                        <Sidebar />
                    </div>
                </Grid >
                <Grid item xs={10.3}>

                </Grid >
            </Grid>
        </>
    )
}

export default HomePage