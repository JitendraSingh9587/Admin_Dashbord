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
                <Grid item xl={1.9} sm={2.3}>
                    <Sidebar />
                </Grid >
                <Grid item xl={10.1} sm={9.7}>

                </Grid >
            </Grid>
        </>
    )
}

export default HomePage