import cassetteIcon from "@/assets/icons/cassette-player.png";
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
    <div>
      {/* Cassette Player Image */}
      <img src={cassetteIcon} className="w-auto h-44 object-contain" />

      {/* Media Control Icons */}
      <div className="w-full px-5 flex gap-2 justify-center items-center">
        {controls.map((control) => (
          <motion.button
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
