/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* CUSTOM IMPORTS */
import AuthEndpoints from '../../config/endpoints/Authentication'

const { loginUser } = AuthEndpoints

const useLogin = (data) => {

    /* LOCAL STATES */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const [spinner, setSpinner] = useState(false)

    /* HOOKS */
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* HANDLE LOGIN SUBMIT */
    const onSubmit = async (data) => {
        try {
            if (!email) {
                setErrorMessage('Email required*')
                return;
            } else if (!password) {
                setErrorMessage('password is required* ')
                return;
            } else {
                setErrorMessage(null)
            }

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'POST',
                url: loginUser,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            setSpinner(false)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {

                localStorage.setItem('token', response.data.token)


                await dispatch({ type: "SET_LOGIN", login: true, token: response.data.token })

                navigate('/home')
            }

        } catch (e) {
            /* ERROR */
            setSpinner(false)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { email, password, errorMessage, spinner, setEmail, setPassword, setSpinner, onSubmit }


}

export default useLogin