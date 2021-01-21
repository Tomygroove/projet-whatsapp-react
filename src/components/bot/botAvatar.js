import React from 'react';

import styled from 'styled-components'

const BotAvatar = () => {
    return (
        <div>
            <AvatarBot>
                T
            </AvatarBot>
        </div>
    );
};

const AvatarBot = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    background-color: #262D31;
    color: #A9ABAD;
    margin-right: 10px;
    margin-left: -10px;
`

export default BotAvatar;