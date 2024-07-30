import { PiVinylRecordFill } from "react-icons/pi";
import { motion } from "framer-motion";
import SpotifyWidget from "./SpotifyWidget";
import { useContext } from "react";
import { MusicPlayerContext } from "./MusicContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MixTape = () => {
  // CONSTANTS
  const { loading } = useContext(MusicPlayerContext);

  return (
    <div className={`mt-3 w-full ${loading ? "" : "h-full"}`}>
      {/* Cassette Player Image */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
        }}
        className="mx-auto w-fit mb-4"
      >
        <PiVinylRecordFill
          // size={100}
          className="text-[9rem] sm:text-[8rem]"
        />
      </motion.div>

      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1,
            ease: "linear",
          }}
          className="mx-auto w-fit"
        >
          <AiOutlineLoading3Quarters className="text-[5rem] sm:text[4rem] text-dark" />
        </motion.div>
      ) : (
        <SpotifyWidget />
      )}
    </div>
  );
};

export default MixTape;
