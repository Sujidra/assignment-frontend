/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* CUSTOM IMPORTS */
import AuthEndpoints from '../../config/endpoints/Authentication'

const { registerUser } = AuthEndpoints

const useRegister = (data) => {

    /* LOCAL STATES */
    const [username, setUserName] = useState("")
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
            } else if (!username) {
                setErrorMessage('username required*')
                return;
            } else if (!password || password.length < 6) {
                setErrorMessage('Minimum 6 letters of password is required* ')
                return;
            } else {
                setErrorMessage(null)
            }

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'POST',
                url: registerUser,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            })

            setSpinner(false)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {

                // localStorage.setItem('token', response.data.token)


                // dispatch({ type: "SET_LOGIN", login: true, token: response.data.token })

                navigate('/')
            }

        } catch (e) {
            /* ERROR */
            setSpinner(false)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { username, email, password, errorMessage, spinner, setUserName, setEmail, setPassword, setSpinner, onSubmit }


}

export default useRegister