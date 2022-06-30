import React, { useState } from 'react'

/* CUSTOM IMPORTS*/
import { RegisterContainer, SubmitButtom } from "./index.styled"

/*HOOK*/
import useLogin from '../../../Hooks/Auth/useRegister'

export default function Register() {

    const { username, email, password, errorMessage, spinner, setUserName, setEmail, setPassword, setSpinner, onSubmit } = useLogin()

    return (
        <RegisterContainer>
            <h1>Register</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <input name='Username' placeholder='username*' value={username} onChange={(e) => { setUserName(e.target.value) }}></input>
            <input name='Email' placeholder='email*' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            <input name='Password' type={"password"} value={password} placeholder='password*' onChange={(e) => { setPassword(e.target.value) }}></input>
            <SubmitButtom onClick={onSubmit}>Submit</SubmitButtom>
        </RegisterContainer>
    )
}
