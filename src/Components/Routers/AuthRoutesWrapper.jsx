import React, { createContext } from 'react'
import { Routes, Route } from "react-router-dom"
import Signin from '../AuthenticationPage/Signin';
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../Home-Page/HomePage'
import ErrorPage from '../ErrorPage/ErrorPage'

// Context api for navbar data
export const UserNavData = createContext()

function AuthRoutesWrapper() {


    let Userdata = {
        name: "jitendra singh"
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