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
      <div className="mt-2 flex flex-1 flex-col justify-start whitespace-pre-line w-full gap-3 max-h-full">
        {/* <Messages /> */}

        <div className="h-fit bg-blue flex mr-auto w-fit max-w-[80%] items-center justify-start overflow-x-auto">
          <img src={humanNormalIcon} className="h-6 w-6 object-contain" />

          <p className="text-xl text-left">
            this this is something else that can be said. Yeaaaaa
          </p>
        </div>

        <div className="bg-green flex ml-auto w-fit max-w-[80%] items-center justify-end overflow-x-auto">
          <p className="text-xl text-left">
            this is my message bask to you dawg. I am going to make it so so
            long for you forever
          </p>
          <img src={humanHandupIcon} className="h-6 w-6 object-contain" />
        </div>

        <div className="h-fit bg-blue flex mr-auto w-fit max-w-[80%] items-center justify-start overflow-x-auto">
          <img src={humanNormalIcon} className="h-6 w-6 object-contain" />

          <p className="text-xl text-left">
            this this is something else that can be said. Yeaaaaa
          </p>
        </div>

        <div className="bg-green flex ml-auto w-fit max-w-[80%] items-center justify-end overflow-x-auto">
          <p className="text-xl text-left">
            this is my message bask to you dawg. I am going to make it so so
            long for you forever
          </p>
          <img src={humanHandupIcon} className="h-6 w-6 object-contain" />
        </div>

        <div className="bg-green flex ml-auto w-fit max-w-[80%] items-center justify-end overflow-x-auto">
          <p className="text-xl text-left">
            this is my message bask to you dawg. I am going to make it so so
            long for you forever
          </p>
          <img src={humanHandupIcon} className="h-6 w-6 object-contain" />
        </div>
        {/* Ending */}
      </div>
    </div>
  );
};

export default Chat;
