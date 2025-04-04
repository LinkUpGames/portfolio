const InputBox = () => {
  return (
    <div className="w-full h-[20%] p-5 bg-dark overflow-y-auto flex justify-center items-center">
      {/* Message */}
      <input
        className="w-full h-full p-2 focus:ring-0 focus:ring-offset-0 focus:outline-hidden text-sm sm:text-base md:text-lg"
        placeholder="Type your message"
        type="text"
      />
    </div>
  );
};

export default InputBox;
