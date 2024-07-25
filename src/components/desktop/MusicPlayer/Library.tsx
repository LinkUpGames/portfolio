import { useContext } from "react";
import { MusicPlayerContext } from "./MusicContext";

const Library = () => {
  const { playlist } = useContext(MusicPlayerContext);

  return (
    <div>
      {playlist.tracks.map((track) => (
        <div key={track.name}>{track.name}</div>
      ))}
    </div>
  );
};

export default Library;
