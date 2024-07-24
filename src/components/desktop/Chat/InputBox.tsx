const InputBox = () => {
  return (
    <div className="w-full p-5 bg-dark flex-1 mt-4 flex-col gap-2 overflow-y-auto">
      {/* Email */}
      <input className="w-full h-full p-2" />

      {/* Message */}
      <input
        className="w-full h-full p-2 focus:ring-0 focus:ring-offset-0 focus:outline-none"
        placeholder="Type your message"
        type="text"
      />
    </div>
  );
};

export default InputBox;
