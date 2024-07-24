import axios from "axios";
import { useEffect, useState } from "react";
import { getAuthToken, getRefreshToken } from "./Spotify";

const MusicPlayer = () => {
  // STATES
  const [authToken, setAuthToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {}, []);

  const bruh = async () => {
    const { access_token } = await getAuthToken();

    const response = await axios.get(
      "https://api.spotify.com/v1/playlists/6Zhw3L9LG0jKIPvZheyIjf",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    console.log("response: ", response.data);
  };

  return (
    <div>
      <button onClick={getAuthToken}> Click me</button>
      <button onClick={bruh}> Refresh Token</button>
    </div>
  );
};

export default MusicPlayer;
