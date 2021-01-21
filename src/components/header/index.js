import React from 'react';

import styled from 'styled-components'
import Logout from '../logout';

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <Title>WhatsApp</Title>
                <Logout></Logout>
            </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.div`
    padding:10px 10px 10px 10px;
    width: 255px;
    color: white;
    background-color: #2A2F32;
`

const Title = styled.span`
    font-size: 20px;
    color: #A9ABAD;
    align-items: center;
`

export default Header