import axios from "axios";
import { useEffect, useState } from "react";
import { getAuthToken, getRefreshToken } from "./Spotify";

const MusicPlayer = () => {
  // STATES
  const [authToken, setAuthToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={getAuthToken}> Click me</button>
      <button onClick={getRefreshToken}> Refresh Token</button>
    </div>
  );
};

export default MusicPlayer;
