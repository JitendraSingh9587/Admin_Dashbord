import React from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../Home-Page/HomePage';

function RoutesWrapper() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/home" element={<ProtectedRoute component={<HomePage />} />} />

                {/* Error page */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </div>
    )
}

export default RoutesWrapper