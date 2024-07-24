import axios from "axios";
import { useEffect, useState } from "react";
import { getAuthToken, getPlaylist, getRefreshToken } from "./Spotify";

const MusicPlayer = () => {
  // STATES
  const [authToken, setAuthToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {}, []);

  const bruh = async () => {
    const yea = await getPlaylist("6Zhw3L9LG0jKIPvZheyIjf");
  };

  return (
    <div>
      <button onClick={bruh}> Click me</button>
    </div>
  );
};

export default MusicPlayer;
