import { useEffect, useState } from "react";
import Messages from "./Messages";
import { ChatContext } from "./ChatContext";
import InputBox from "./InputBox";

const Chat = () => {
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
      Math.random() * 3000,
    );

    addMessage(
      {
        sender: 0,
        color: "#ad463b",
        icon: "https://i.pinimg.com/originals/f4/20/0a/f4200a828929aaa0261aed306bf1c0e5.jpg",
        text: "You can send me a message through here and I'll recieve it!",
      },
      Math.random() * 6000,
    );
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages: messages,
        addMessage: addMessage,
      }}
    >
      <div className="flex flex-col rounded-lg bg-gradient-to-r from-grey to-grey border-2 border-dark h-full w-full">
        {/* Header */}
        <div className="flex text-3xl bg-white text-black w-full justify-center items-center">
          {/* Profile Icon */}

          {/* Useless Icons on the right */}
          <div className="uppercase text-2xl p-6 text-center">Messages</div>
        </div>

        {/* Message Conversation */}
        <div className="block justify-start whitespace-pre-line w-full gap-3 max-h-full overflow-y-auto">
          <Messages />
        </div>

        {/* The Input Box */}
        <InputBox />
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
