import AskName from "./askName";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    helloWorldHandler = () => {
      const message = this.createChatBotMessage("Hello. I'm not self aware. Luckily!")
      this.setChatbotMessage(message)
    }

    NameHandler = () => {
      const message = this.createChatBotMessage("Excellent!", {
        widget: "askName",
      });
      this.setChatbotMessage(message);
    };

    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }));
    };
  }
  
  export default ActionProvider;