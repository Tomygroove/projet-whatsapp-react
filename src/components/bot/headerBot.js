import React from 'react';

import styled from 'styled-components'

const botName = "Thomas";

const HeaderAvatar = () => {
    return (
        <div>
            <Headerbot>
                Conversation avec {botName}
            </Headerbot>
        </div>   
    )
}

const Headerbot = styled.div`
    font-size: 15px;
    background-color: #2A2F32;
    color: #A9ABAD;
    padding: 5px;
    border-radius: 3px;
`
export default HeaderAvatar;