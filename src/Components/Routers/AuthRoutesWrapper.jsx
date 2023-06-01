import React, { createContext, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../Home-Page/HomePage'
import ErrorPage from '../ErrorPage/ErrorPage'
import hacker from '../Images/Comman/hacker.png';
import ProfilePage from '../ProfilePage/ProfilePage';

// Context api for navbar data
export const UserNavData = createContext()

function AuthRoutesWrapper() {
    const [userdata, setUserdata] = useState({
        name: "jitendra singh",
        image: hacker,
        email: "jitendra@singh.com"
    })
    let value = { userdata, setUserdata }
    return (
        <>
            <UserNavData.Provider value={value}>
                <Routes>
                    <Route path="/" element={<Signin />} />

                    <Route path="/dashboard" element={<ProtectedRoute component={<HomePage />} />} />
                    <Route path="/profile" element={<ProtectedRoute component={<ProfilePage />} />} />
                    {/* Error page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserNavData.Provider>
        </>
    )
}
export default AuthRoutesWrapper