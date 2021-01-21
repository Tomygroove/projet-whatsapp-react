class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {

      const lowercase = message.toLowerCase()

      if (lowercase.includes("hello world")) {
        this.actionProvider.helloWorldHandler();
      }


      if (lowercase.includes("askName")) {
        this.actionProvider.NameHandler();
      }
    }
  }
  
  export default MessageParser;