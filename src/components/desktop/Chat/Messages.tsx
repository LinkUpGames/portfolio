import { useEffect, useState } from "react";

const Messages = () => {
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
      0,
    );

    addMessage(
      {
        sender: 0,
        color: "#ad463b",
        icon: "https://i.pinimg.com/originals/f4/20/0a/f4200a828929aaa0261aed306bf1c0e5.jpg",
        text: "You can send me a message through here and I'll recieve it!",
      },
      2,
    );
  }, []);

  return <div>Messages</div>;
};

export default Messages;
