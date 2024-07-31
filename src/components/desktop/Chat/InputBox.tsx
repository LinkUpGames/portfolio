import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";

const InputBox = () => {
  return (
    <div className="w-full h-[15%] p-5 bg-dark flex justify-center items-center gap-5 overflow-y-hidden">
      {/* Message */}
      <input
        className="w-full h-full p-2 focus:ring-0 focus:ring-offset-0 focus:outline-none text-sm sm:text-base md:text-lg"
        placeholder="Type your message"
        type="text"
      />

      <motion.button
        whileTap={{
          scale: 0.7,
        }}
        className="w-10 h-10"
      >
        <IoSend className="w-full h-full text-red" />
      </motion.button>
    </div>
  );
};

export default InputBox;
