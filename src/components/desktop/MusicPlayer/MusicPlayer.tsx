import axios from "axios";
import { useEffect } from "react";

const MusicPlayer = () => {
  // FUNCTIONS
  /*
   * This is an example call
   * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
   */
  const example = async () => {
    try {
      const token = btoa(
        `${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`,
      );

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          grant_type: "client_credentials",
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      console.log("Data: ", response.data);
    } catch (error) {
      console.error("Error sending auth request to spotimeme: ", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={example}> Click me</button>
    </div>
  );
};

export default MusicPlayer;
