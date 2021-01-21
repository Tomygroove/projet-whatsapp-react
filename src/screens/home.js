import React, { useEffect, useState } from 'react';

import styled from 'styled-components'
import {Chatbot} from 'react-chatbot-kit'
import Header from '../components/header'
import MessageParser from '../components/bot/messageParser'
import ActionProvider from '../components/bot/actionProvider'
import config from '../config/config'
import ClipLoader from "react-spinners/ClipLoader";
import SearchBar from '../components/searchbar/'

const Home = props => {
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])

    return (
        <div>
            
            <Header></Header>
            <SearchBar></SearchBar>
            {/* {MessageParser.filter((val) => {
                if (search == "") {
                    return val
                } else if (val.toLowerCase().includes(search.toLowerCase())) {

                }
            }) */}
            {
                loading ?
                    <ClipLoader color={"#056162"} loading={loading} size={30} />
                :
            
            <ChatContainer>
                <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
            </ChatContainer>
            }
        </div>
    )
}

const ChatContainer = styled.div`
    font-size: 20px;
    color: red;
    margin-bottom: 12px;
`


export default Home;