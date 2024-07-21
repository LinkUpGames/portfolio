import { useEffect, useState } from "react";

const Messages = () => {
  // STATES
  const [messages, setMessages] = useState<Message[]>([]); // The messages are the going to be displayed

  // FUNCTIONS
  const addMessage = () => {};

  // EFFECTS
  /**
   * Prefill with the messages that I probably would've said in this conversation
   */
  useEffect(() => {
    // TODO: BRUH
    console.log("TODO");
  }, []);

  return <div>Messages</div>;
};

export default Messages;
