import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

function ProtectedRoute(props) {
    const { component } = props
    const navigate = useNavigate()
    const cookies = new Cookies();

    useEffect(() => {
        if (cookies.get("loggedin") !== "true" && cookies.get("redirect") !== 1) {
            navigate("/")
        }
    },)

    return (
        <>
            {component}
        </>
    )
}

export default ProtectedRoute