import React from 'react';

import styled from 'styled-components'

const UserAvatar = () => {
    return (
        <div>
            <AvatarUser>
                Moi
            </AvatarUser>
        </div>
    );
};

const AvatarUser = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    background-color: #056162;
    color: #A9ABAD;
    margin-right: -10px;
    margin-left: 10px;
`
export default UserAvatar;