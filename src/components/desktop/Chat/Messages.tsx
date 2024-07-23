import { useContext, useEffect, useMemo } from "react";
import humanNormalIcon from "pixelarticons/svg/human.svg";
import { ChatContext } from "./ChatContext";

const Messages = () => {
  const { addMessage, messages } = useContext(ChatContext);

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
      2000,
    );
  }, []);

  // MEMOS
  /**
   * The messages that are going to be displayed in the messages app section
   */
  const messagesToDisplay = useMemo(() => {
    const displayedMessages = messages.map((message, i) => {
      const index = message.sender;

      const jsx = (
        <div
          key={i}
          className={`mt-6 h-fit ${index === 0 ? "bg-blue" : "bg-green"} flex ${index === 0 ? "mr-auto" : "ml-auto"} ${index === 0 ? "justify-start" : "justify-end"} w-fit max-w-[80%] items-center overflow-x-auto`}
        >
          <img src={humanNormalIcon} className="h-6 w-6 object-contain" />

          <p className="text-xl text-left">{message.text}</p>
        </div>
      );

      return jsx;
    });

    return displayedMessages;
  }, [messages]);

  console.log("Messages Display: ", messagesToDisplay);

  return <>{messagesToDisplay}</>;
};

export default Messages;
