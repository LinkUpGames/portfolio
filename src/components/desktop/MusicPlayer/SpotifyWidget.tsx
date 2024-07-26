import { useEffect } from "react";

const SpotifyWidget = () => {
  // EFFECTS
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = document.getElementById("spotify-widget");

      const options = {
        uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
        width: "100%",
        height: 60,
      };

      const callback = (EmbedController) => {
        // TODO: Do something with emdbed controller
      };

      IFrameAPI.createController(element, options, callback);
    };
  });

  return (
    <div className="w-full">
      <div id="spotify-widget"></div>
    </div>
  );
};

export default SpotifyWidget;