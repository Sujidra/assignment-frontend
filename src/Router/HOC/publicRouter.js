import React, { Component, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


import useGetMe from '../../Hooks/Auth/useGetMe'



const PublicRouter = ({ children }) => {

    const [checked, setChecked] = useState(false)

    const LoggedIn = useSelector(state => state.user.login)
    const { getUserData } = useGetMe()


    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUserData()
        }
        setChecked(true)
    }, [])





    return !checked ? <div>Loading...</div> :
        !LoggedIn ? children : <Navigate to="/home" />
}

export default PublicRouter;

