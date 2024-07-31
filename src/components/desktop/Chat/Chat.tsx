import { useContext, useEffect, useState } from "react";
import Messages from "./Messages";
import { ChatContext } from "./ChatContext";
import InputBox from "./InputBox";
import { AppContext } from "@/AppContext";
import { getRandomNumber } from "@/helpers/functions";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  // CONTEXT
  const { changePopup } = useContext(AppContext);

  // STATES
  const [messages, setMessages] = useState<Message[]>([]); // The messages are the going to be displayed

  // FUNCTIONS
  /**
   * Add a message to the conversation
   * @param message The message to add
   * @param timeout The time in milliseconds
   */
  const addMessage = (message: Message, timeout: number = 0) => {
    if (timeout > 0) {
      setTimeout(() => {
        setMessages((prev) => [...prev, message]);
      }, timeout);
    } else {
      setMessages((prev) => [...prev, message]);
    }
  };

  /**
   * Exit the chat app
   */
  const closePopup = () => {
    changePopup(null);
  };

  // EFFECTS
  /**
   * Prefill with the messages that I probably would've said in this conversation
   */
  useEffect(() => {
    addMessage(
      {
        sender: 0,
        color: "#ad463b",
        icon: "https://i.pinimg.com/originals/f4/20/0a/f4200a828929aaa0261aed306bf1c0e5.jpg",
        text: "Hey! Thank you for contacting me!",
      },
      getRandomNumber(0, 2000),
    );

    addMessage(
      {
        sender: 0,
        color: "#ad463b",
        icon: "https://i.pinimg.com/originals/f4/20/0a/f4200a828929aaa0261aed306bf1c0e5.jpg",
        text: "You can send me a message through here and I'll recieve it!",
      },
      getRandomNumber(6000, 10000),
    );
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages: messages,
        addMessage: addMessage,
        closePopup: closePopup,
      }}
    >
      <div className="flex flex-col rounded-lg bg-fresia backdrop-blur-md bg-opacity-60 border-2 border-dark h-full w-full">
        {/* Header */}
        <ChatHeader />

        {/* Message Conversation */}
        <Messages />

        {/* The Input Box */}
        <InputBox />
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
