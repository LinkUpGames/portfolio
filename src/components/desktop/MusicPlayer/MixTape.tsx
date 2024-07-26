import { PiVinylRecordFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { IoPlayCircle } from "react-icons/io5";
import { IoPlayForwardCircle } from "react-icons/io5";
import { IoPlayBackCircle } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";

const MixTape = () => {
  const controls = [
    {
      component: <IoPlayBackCircle size={35} />,
    },
    {
      component: <IoPauseCircle size={35} />,
    },
    {
      component: <IoPlayCircle size={35} />,
    },
    {
      component: <IoPlayForwardCircle size={35} />,
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
        <PiVinylRecordFill size={100} />
      </motion.div>

      {/* Media Control Icons */}
      <div className="w-full px-5 flex gap-2 justify-center items-center">
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
