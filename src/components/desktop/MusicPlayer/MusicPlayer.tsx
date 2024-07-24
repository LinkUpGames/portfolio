import axios from "axios";
import { useEffect } from "react";

const MusicPlayer = () => {
  // FUNCTIONS
  const example = async () => {
    axios.get("https://accounts.spotify.com/api/token", {
      headers: {
        // Authorization: `Basic ${new Buffer.from(}`// TODO: Continue from here
        // https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
      },
    });
  };

  useEffect(() => {}, []);

  return <div>MusicPlayer</div>;
};

export default MusicPlayer;
