import React from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';
import ErrorPage from '../ErrorPage/ErrorPage';

function RoutesWrapper() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signin />} />
                {/* Error page */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </div>
    )
}

export default RoutesWrapper