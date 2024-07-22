import humanNormalIcon from "pixelarticons/svg/human.svg";
import humanHandupIcon from "pixelarticons/svg/human-handsup.svg";

const Chat = () => {
  // STATES

  // FUNCTION

  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-r from-grey to-grey border-2 border-dark h-full w-full">
      {/* Header */}
      <div className="flex text-3xl bg-white text-black w-full justify-center items-center">
        {/* Profile Icon */}

        {/* Useless Icons on the right */}
        <div className="uppercase text-2xl p-6 text-center">Messages</div>
      </div>

      {/* Message Conversation */}
      <div className="flex flex-col justify-start overflow-y-scroll whitespace-pre-line w-full">
        {/* <Messages /> */}

        <div className="bg-blue flex mr-auto w-fit items-center justify-start">
          <img src={humanNormalIcon} className="h-6 w-6 object-contain" />

          <p className="text-xl text-left">this</p>
        </div>

        <div className="bg-green flex ml-auto w-fit max-w-[80%] items-center justify-end overflow-x-auto">
          <img src={humanHandupIcon} className="h-6 w-6 object-contain" />

          <p className="text-xl text-left">
            this is my message bask to you dawg. I am going to make it so so
            long for you forever
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
