import React, { useState } from 'react'

/* CUSTOM IMPORTS*/
import { Container, SubmitButtom, ButtonContainer } from "./index.styled"

/*HOOK*/
import useLogin from '../../../Hooks/Auth/useLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const { email, password, errorMessage, spinner, setEmail, setPassword, setSpinner, onSubmit } = useLogin()
    const navigate = useNavigate()

    return (
        <Container>
            <h1>Login</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <input name='Email' placeholder='email*' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            <input name='Password' type={"password"} value={password} placeholder='password*' onChange={(e) => { setPassword(e.target.value) }}></input>
            <ButtonContainer>
                <SubmitButtom onClick={onSubmit}>Submit</SubmitButtom>
                <SubmitButtom onClick={(e) => { navigate("/register") }}>Sign up</SubmitButtom>
            </ButtonContainer>

        </Container>
    )
}
