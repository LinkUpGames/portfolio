import { PiVinylRecordFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { IoPlayCircle } from "react-icons/io5";
import { IoPlayForwardCircle } from "react-icons/io5";
import { IoPlayBackCircle } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";

const MixTape = () => {
  const controls = [
    {
      component: (
        <IoPlayBackCircle className="text-[2.8rem] sm:text-[2.5rem] md:text-[2rem]" />
      ),
    },
    {
      component: (
        <IoPauseCircle className="text-[2.8rem] sm:text-[2.5rem] md:text-[2rem]" />
      ),
    },
    {
      component: (
        <IoPlayCircle className="text-[2.8rem] sm:text-[2.5rem] md:text-[2rem]" />
      ),
    },
    {
      component: (
        <IoPlayForwardCircle className="text-[2.8rem] sm:text-[2.5rem] md:text-[2rem]" />
      ),
    },
  ];

  return (
    <div className="my-3">
      {/* Cassette Player Image */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
        }}
        className="mx-auto w-fit"
      >
        <PiVinylRecordFill
          // size={100}
          className="text-[9rem] sm:text-[8rem]"
        />
      </motion.div>

      {/* Media Control Icons */}
      <div className="w-full px-5 flex gap-6 md:gap-2 justify-center items-center">
        {controls.map((control, i) => (
          <motion.button
            key={i}
            whileTap={{
              scale: 0.7,
            }}
            className=""
          >
            {control.component}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MixTape;
