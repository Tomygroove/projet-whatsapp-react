import React, { useEffect, useState }  from 'react';

import Header from '../components/header'
import Signin from '../components/signin'
import axios from 'axios'

const submit = (e, formState, setErrorMessage, history) => {
        e.preventDefault()
        if(!formState.email || !formState.password){
            setErrorMessage('Les champs ne doivent pas êtres vides')
            return
        }
        axios({
            method: 'POST',
            url: 'https://api.mocki.io/v1/dfb4dd3f',
            data: {
                email: formState.email,
                password: formState.password
            }
        }).then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('/home')
        }).catch(err => {
            setErrorMessage('Une erreur est survenue')
            console.log(err)
        })
}

const Login = ({history}) => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log('Login')
        if(token) {
            history.push('/home')
        }
    },[])
    return (
        <div>
            <Header></Header>
            <Signin submit={submit}></Signin>
        </div>
    )
}

export default Login