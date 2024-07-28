import { motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { MusicPlayerContext } from "./MusicContext";

interface TrackProps {
  track: MusicTrack;
}

const Track = ({ track }: TrackProps) => {
  const { playTrack, currentTrack } = useContext(MusicPlayerContext);

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

  /**
   * Update the track that is to be played here
   */
  const handleClick = () => {
    const myName = track.name;
    const otherName = currentTrack.name;

    if (myName !== otherName) {
      playTrack(track);
    }
  };

  return (
    <div
      data-spotify-id={track.link}
      className="relative w-fit flex flex-col justify-center items-center gap-2 track"
    >
      <motion.img
        onClick={handleClick}
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
