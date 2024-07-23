import { useState } from "react";
import Messages from "./Messages";
import { ChatContext } from "./ChatContext";

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
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
