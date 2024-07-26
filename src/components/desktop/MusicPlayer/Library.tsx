import { useContext } from "react";
import { MusicPlayerContext } from "./MusicContext";
import Track from "./Track";

const Library = () => {
  const { playlist } = useContext(MusicPlayerContext);

  return (
    <div className="w-[95%] justify-items-center grid grid-cols-2 sm:grid-cols-3 overflow-y-auto gap-4 px-2 py-1 border-4 border-s-teal rounded-lg">
      {playlist.tracks.map((track, i) => (
        <Track track={track} key={i} />
      ))}
    </div>
  );
};

export default Library;
