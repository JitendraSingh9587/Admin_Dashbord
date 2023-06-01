import React from 'react'
import CommanCss from '../CommanComponent/Comman.module.css'
import Navbar from '../Navigation/Navbar/Navbar'
import Sidebar from '../Navigation/SideBar/Sidebar'
import { Grid } from '@mui/material'
import Footer from '../Navigation/Footer/Footer'

function DashbordPage() {

    return (
        <>
            <Navbar />
            <Footer />
            <Grid container className={CommanCss.GridWrapper}>
                <Grid item xl={2.1} sm={2.3}>
                    <Sidebar />
                </Grid >
                <Grid item xl={9.9} sm={9.7}>
                </Grid >
            </Grid>
        </>
    )
}

export default DashbordPage