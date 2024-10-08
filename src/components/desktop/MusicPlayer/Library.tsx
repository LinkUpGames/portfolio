import { useContext } from "react";
import { MusicPlayerContext } from "./MusicContext";
import Track from "./Track";

const Library = () => {
  const { playlist } = useContext(MusicPlayerContext);

  return (
    <div
      className={`w-full justify-items-center grid grid-cols-2 sm:grid-cols-3 overflow-y-auto gap-4 px-2 py-1 border-4 border-dark rounded-lg max-h-64 lg:max-h-80 mt-6`}
    >
      {playlist.tracks.map((track, i) => (
        <Track track={track} key={i} />
      ))}
    </div>
  );
};

export default Library;
