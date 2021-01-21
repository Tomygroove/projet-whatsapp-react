import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Signin = ({submit}) => {
    const [formState, setFormState] = useState({email: '', password: ''})
    const[errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    return (
        <StyledForm onSubmit={(e) => submit(e, formState, setErrorMessage, history)}>
            <StyledSpan>Connexion</StyledSpan>
            <SigninInput onChange={e => setFormState({ ...formState, email: e.target.value})} type='email' placeholder='Email'></SigninInput>
            <SigninInput onChange={e => setFormState({ ...formState, password: e.target.value})} type='password' placeholder='Mot de passe'></SigninInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninInput type='Submit'></SigninInput>
        </StyledForm>
    );
};

const StyledSpan = styled.span`
    font-size: 20px;
    color: #056162;
    margin-bottom: 30px;
    margin-top: 20px;
`

const StyledForm = styled.form`
    width: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #131C21;
    margin-bottom: 50px;
`

const SigninInput = styled.input`
    margin: 10px 0px 10px 0px;
    border-radius: 12px;
    border: none;
    background-color: #2A2F32;
    height: 20px;
    color: #056162;
    padding: 0px 6px;
`

export default Signin;