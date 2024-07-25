import { useCallback, useEffect, useState } from "react";
import { getPlaylist } from "./Spotify";

const MusicPlayer = () => {
  // STATES

  // FUNCTIONS
  /**
   * Function that fetches the playlist that we want to plei
   */
  const fetchPlaylist = useCallback(async () => {
    const data = await getPlaylist("6Zhw3L9LG0jKIPvZheyIjf");
  }, []);

  // EFFECTS
  /**
   * Make sure to fetch the playlist as soon as we have loaded
   */
  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);

  return (
    <div>
      hello
      {/* <button onClick={bruh}> Click me</button> */}
    </div>
  );
};

export default MusicPlayer;
