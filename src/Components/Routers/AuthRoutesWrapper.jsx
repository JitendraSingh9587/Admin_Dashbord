import React, { createContext } from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../Home-Page/HomePage'
import ErrorPage from '../ErrorPage/ErrorPage'
import hacker from '../Images/Comman/hacker.png';

// Context api for navbar data
export const UserNavData = createContext()

function AuthRoutesWrapper() {


    let Userdata = {
        name: "jitendra singh",
        image: hacker
    }
    return (
        <>
            <UserNavData.Provider value={Userdata}>
                <Routes>
                    <Route path="/" element={<Signin />} />

                    <Route path="/home" element={<ProtectedRoute component={<HomePage />} />} />
                    {/* Error page */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserNavData.Provider>
        </>
    )
}
export default AuthRoutesWrapper