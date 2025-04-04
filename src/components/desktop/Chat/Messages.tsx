import { useContext, useMemo } from "react";
import humanNormalIcon from "pixelarticons/svg/human.svg";
import { ChatContext } from "./ChatContext";
import { motion, AnimatePresence } from "framer-motion";

const Messages = () => {
  const { messages } = useContext(ChatContext);
  // MEMOS
  /**
   * The messages that are going to be displayed in the messages app section
   */
  const messagesToDisplay = useMemo(() => {
    const displayedMessages = messages.map((message, i) => {
      const index = message.sender;
      const slideInFrom = index === 0 ? "-100%" : "100%";

      const jsx = (
        <motion.div
          key={i}
          className={`mt-6 h-fit px-4 py-2 sm:py-1 ${index === 0 ? "rounded-tr-full rounded-br-full" : "rounded-tl-full rounded-bl-full"} ${index === 0 ? "bg-blue" : "bg-green"} flex ${index === 0 ? "mr-auto" : "ml-auto"} ${index === 0 ? "justify-start" : "justify-end"} ${index === 0 ? "flex-row" : "flex-row-reverse"} w-fit max-w-[80%] items-center overflow-x-auto flex gap-4 shrink-0`}
          initial={{
            x: slideInFrom,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: slideInFrom,
          }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={humanNormalIcon}
            className="h-14 w-14 border-2 rounded-full p-2 border-dark object-contain"
          />

          <p className="text-sm sm:text-lg md:text-xl text-left">
            {message.text}
          </p>
        </motion.div>
      );

      return jsx;
    });

    return displayedMessages;
  }, [messages]);

  return <AnimatePresence>{messagesToDisplay}</AnimatePresence>;
};

export default Messages;
