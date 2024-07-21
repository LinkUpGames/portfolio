import Messages from "./Messages";

const Chat = () => {
  // STATES

  // FUNCTION

  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-r from-grey to-grey border-2 border-dark h-full w-full">
      {/* Header */}
      <div className="flex text-3xl bg-white text-black w-full">
        {/* Profile Icon */}

        {/* Useless Icons on the right */}
        <div className="uppercase text-2xl p-6">Messages</div>
      </div>

      {/* Message Conversation */}
      <div className="overflow-y-scroll whitespace-pre-line max-h-40 w-full">
        <Messages />
        {`bruh
          jdsioadajsoj
          iojd osd
          jodsiajf aoijf (asdf
          jijfaoifjds
          asd) => { second }
          dsfs
          jdsioadajsoj
          iojd osd
          jodsiajf aoijf (asdf iasodfjasodifj 
          jijfaoifjds
      `}
      </div>
    </div>
  );
};

export default Chat;
