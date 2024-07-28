import { useContext, useEffect } from "react";
import { MusicPlayerContext } from "./MusicContext";

const SpotifyWidget = () => {
  // CONTEXT
  const { playlist, loading } = useContext(MusicPlayerContext);

  // EFFECTS
  /**
   * Initialze the iframe spotify api
   */
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = document.getElementById("spotify-widget");
      const options = {
        uri: "",
        width: "100%",
        height: "100%",
      };

      const callback = (EmbedController: any) => {
        document.querySelectorAll(".track").forEach((track: any) => {
          track.addEventListener("click", () => {
            EmbedController.loadUri(track.dataset.spotifyId);
          });
        });
      };

      if (element && !loading) {
        IFrameAPI.createController(element, options, callback);
      }
    };
  }, [playlist, loading]);

  return (
    <div className="max-w-full sm:w-[50%] sm:max-w-96 md:max-w-[30rem] mx-auto h-full">
      <div id="spotify-widget" className="w-full"></div>
    </div>
  );
};

export default SpotifyWidget;
