import { useContext, useEffect } from "react";
import { MusicPlayerContext } from "./MusicContext";

const SpotifyWidget = () => {
  const { playlist, playerController } = useContext(MusicPlayerContext);

  /**
   * On first load, load the first track of the song
   */
  useEffect(() => {
    if (playerController.current && playlist.tracks.length > 0) {
      const track = playlist.tracks[0];

      playerController.current.loadUri(track.link);
    }
  }, [playerController, playlist]);

  return (
    <div className="max-w-full sm:w-[50%] sm:max-w-96 md:max-w-[30rem] mx-auto h-full">
      <div id="spotify-widget" className="w-full"></div>
    </div>
  );
};

export default SpotifyWidget;
