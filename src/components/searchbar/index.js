import React, { useState } from 'react';


import styled from 'styled-components'

const Searchbar = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <SigninInput onChange={e => setSearch(e.target.value)} type='text' placeholder='Search...'></SigninInput>
        </div>
    )
}

const SigninInput = styled.input`
    border: none;
    background-color: #2A2F32;
    width: 263px;
    height: 30px;
    color: #056162;
    padding: 0px 6px;
`

export default Searchbar