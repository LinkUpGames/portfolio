import { motion } from "framer-motion";
import { useMemo } from "react";

interface TrackProps {
  track: MusicTrack;
}

const Track = ({ track }: TrackProps) => {
  /**
   * The image to display for this track
   */
  const image = useMemo(() => {
    if (track.images.length > 0) {
      return track.images[0].url;
    } else {
      return "";
    }
  }, [track.images]);

  return (
    <div className="relative w-fit flex flex-col justify-center items-center gap-2">
      <motion.img
        whileHover={{
          scale: 1.2,
          transition: {
            type: "spring",
            duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
        src={image}
        className="w-auto h-24 md:h-40 border-2 border-black cursor-pointer select-none"
      />

      <p className="text-xs md:text-sm text-center text-teal bg-salmon rounded-full p-2 text-ellipsis max-w-40 truncate border-2 border-teal select-none">
        {track.name}
      </p>
    </div>
  );
};

export default Track;
