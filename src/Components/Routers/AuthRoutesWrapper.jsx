import React from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';

function AuthRoutesWrapper() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signin />} />
            </Routes>
        </>
    )
}

export default AuthRoutesWrapper