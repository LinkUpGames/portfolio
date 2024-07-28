import { PiVinylRecordFill } from "react-icons/pi";
import { motion } from "framer-motion";
import SpotifyWidget from "./SpotifyWidget";

const MixTape = () => {
  return (
    <div className="mt-3 w-full h-full">
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

      {/* Widget */}
      <SpotifyWidget />
    </div>
  );
};

export default MixTape;
