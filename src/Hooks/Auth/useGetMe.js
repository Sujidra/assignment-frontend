/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* CUSTOM IMPORTS */
import AuthEndpoints from '../../config/endpoints/Authentication'

const { getCurrentUser } = AuthEndpoints

const useGetMe = (data) => {

    /* LOCAL STATES */
    const [errorMessage, setErrorMessage] = useState(null)
    const [spinner, setSpinner] = useState(false)

    /* HOOKS */
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* GET USER DATE */
    const getUserData = async (data) => {
        try {

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'GET',
                url: getCurrentUser,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth': localStorage.getItem("token")
                },

            })

            setSpinner(false)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {


                await dispatch({ type: "SET_LOGIN", login: true, token: localStorage.getItem("token") })
                await dispatch({ type: "SET_USER_DETAILS", userDetails: response.data.user })

                navigate('/home')
            }

        } catch (e) {
            /* ERROR */
            localStorage.removeItem('token')

            setSpinner(false)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { errorMessage, spinner, setSpinner, getUserData }


}

export default useGetMe