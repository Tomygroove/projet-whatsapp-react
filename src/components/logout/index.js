import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : (
        <Button onClick={handleLogout}>Login</Button>
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
    border:none;
    padding:6px 5px 6px 5px;
    border-radius:2px;
    box-shadow:3px 3px 12px #999;
    background:#d34836;
    font:bold 13px Arial;
    color:#2A2F32;
`
const Button = styled.button`
border:none;
padding:6px 5px 6px 5px;
border-radius:2px;
box-shadow:3px 3px 12px #999;
background-color: #056162;
font:bold 13px Arial;
color:#2A2F32;
`

const Container = styled.div`
  float: right;
`

export default Logout