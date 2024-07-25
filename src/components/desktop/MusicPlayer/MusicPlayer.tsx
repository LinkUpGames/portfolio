import { useCallback, useEffect, useState } from "react";
import { getPlaylist } from "./Spotify";
import { DUMMY_PLAYLIST, MusicPlayerContext } from "./MusicContext";
import Library from "./Library";
import MixTape from "./MixTape";

const MusicPlayer = () => {
  // STATES
  const [playlist, setPlaylist] = useState<MusicPlaylist>(DUMMY_PLAYLIST); // The music track that we want to display

  // FUNCTIONS
  /**
   * Function that fetches the playlist that we want to plei
   */
  const fetchPlaylist = useCallback(async () => {
    const data = await getPlaylist("5Zr8lFNUaSzadkZZBTbHKt");

    if (data) {
      setPlaylist(data);
    }
  }, []);

  // EFFECTS
  /**
   * Make sure to fetch the playlist as soon as we have loaded
   */
  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist: playlist,
      }}
    >
      <div className="flex flex-col rounded-lg bg-fresia border-2 border-dark h-full w-full justify-start items-center">
        <MixTape />

        <Library />
      </div>
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayer;
