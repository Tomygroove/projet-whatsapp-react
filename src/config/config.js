import React from 'react';

import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "../components/bot/botAvatar"
import UserAvatar from "../components/bot/userAvatar"
import Headerbot from "../components/bot/headerBot"
import AskName from "../components/bot/askName"

const botName = "Thomas";

const config = {
  botName: botName, 
  initialMessages: [createChatBotMessage(`Salut je suis ${botName}, comment vas-tu ? :)`)],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    header: (props) => <Headerbot {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,

  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#262D31",
    },
    chatButton: {
      backgroundColor: "#262D31",
    },
  },
  state: {
    askName: []
  },
  widgets: [
    {
      widgetName: "askName",
      widgetFunc: (props) => <AskName {...props} />,
      mapStateToProps: ["askName"],
    },
  ]
}

export default config