import { useContext, useEffect } from "react";
import { MusicPlayerContext } from "./MusicContext";

const SpotifyWidget = () => {
  // CONTEXT
  const { playlist } = useContext(MusicPlayerContext);

  // EFFECTS
  /**
   * Initialze the iframe spotify api
   */
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = document.getElementById("spotify-widget");

      const options = {
        uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
        width: "100%",
        height: 60,
      };

      const callback = (EmbedController: any) => {
        const tracks = document.querySelectorAll(".track");
        console.log("tracks: ", tracks);
        // document.querySelectorAll(".track").forEach((track) => {
        //   track.addEventListener("click", () => {
        //     EmbedController.loadUri(track.dataset.spotifyId);
        //   });
        // });
      };

      if (element) {
        IFrameAPI.createController(element, options, callback);
      }
    };
  }, [playlist]);

  return (
    <div className="w-full">
      <div id="spotify-widget"></div>
    </div>
  );
};

export default SpotifyWidget;
