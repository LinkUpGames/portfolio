import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { IoCloseCircleSharp } from "react-icons/io5";

const ChatHeader = () => {
  const { closePopup } = useContext(ChatContext);

  const handleClick = () => {
    closePopup();
  };

  return (
    <div className="flex text-3xl bg-red text-black w-full justify-center items-center relative">
      {/* Profile Icon */}

      {/* Useless Icons on the right */}
      <h2 className="uppercase text-2xl p-6 text-center">Messages</h2>

      {/* Exit Icon */}
      <button onClick={handleClick} className="absolute right-4 top-6">
        <IoCloseCircleSharp size={30} />
      </button>
    </div>
  );
};

export default ChatHeader;
