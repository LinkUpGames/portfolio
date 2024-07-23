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
        sender: 1,
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
          className={`mt-6 h-fit px-2 py-1 ${index === 0 ? "rounded-tr-full rounded-br-full" : "rounded-tl-full rounded-bl-full"} ${index === 0 ? "bg-blue" : "bg-green"} flex ${index === 0 ? "mr-auto" : "ml-auto"} ${index === 0 ? "justify-start" : "justify-end"} ${index === 0 ? "flex-row" : "flex-row-reverse"} w-fit max-w-[80%] items-center overflow-x-auto flex gap-4`}
        >
          <img
            src={humanNormalIcon}
            className="h-14 w-14 border-2 rounded-full p-2 border-dark object-contain"
          />

          <p className="text-xl text-left">{message.text}</p>
        </div>
      );

      return jsx;
    });

    return displayedMessages;
  }, [messages]);

  return <>{messagesToDisplay}</>;
};

export default Messages;
