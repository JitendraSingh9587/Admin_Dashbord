import React from 'react'
import Navbar from '../Navigation/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../Home-Page/HomePage'
import ErrorPage from '../ErrorPage/ErrorPage'

function ProtectedRoutesWrapper() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<ProtectedRoute component={<HomePage />} />} />
                {/* Error page */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default ProtectedRoutesWrapper