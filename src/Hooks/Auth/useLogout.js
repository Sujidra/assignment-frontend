/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* CUSTOM IMPORTS */
import AuthEndpoints from '../../config/endpoints/Authentication'

const { logoutUser } = AuthEndpoints

const useLogout = (data) => {

    /* LOCAL STATES */
    const [errorMessage, setErrorMessage] = useState(null)
    const [spinner, setSpinner] = useState(false)


    /* GLOBAL STATES */
    const authToken = useSelector(state => state.user.token)


    /* HOOKS */
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* HANDLE LOGIN SUBMIT */
    const onLogout = async () => {
        try {

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'DELETE',
                url: logoutUser,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth': authToken || localStorage.getItem("token")

                },

            })

            setSpinner(false)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {

                localStorage.setItem('token', response.data.token)


                await dispatch({ type: "SET_LOGIN", login: false, token: "" })

                navigate('/')
            }

        } catch (e) {
            /* ERROR */
            setSpinner(false)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { errorMessage, spinner, onLogout }


}

export default useLogout