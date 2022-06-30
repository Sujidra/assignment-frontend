import React, { Component, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'




const PrivateRoute = ({ children }) => {

    const LoggedIn = useSelector(state => state.user.login)







    return LoggedIn ? children : <Navigate to="/" />
}

export default PrivateRoute;

