import { useCallback, useEffect, useRef, useState } from "react";
import { getPlaylist } from "./Spotify";
import { DUMMY_PLAYLIST, MusicPlayerContext } from "./MusicContext";
import Library from "./Library";
import MixTape from "./MixTape";

const MusicPlayer = () => {
  // STATES
  const [loading, setLoading] = useState<boolean>(true); // Check if we are loading any external information
  const [playlist, setPlaylist] = useState<MusicPlaylist>(DUMMY_PLAYLIST); // The music track that we want to display

  // NOTE: https://developer.spotify.com/documentation/embeds/references/iframe-api#embedcontrollertoggleplay
  const playerWidget = useRef<SpotifyIFrame | null>(null); // This is the  player widget that will be added to the music player
  const playerController = useRef<SpotifyController | null>(null); // This is the player controller responsible for moving the widget values

  // FUNCTIONS
  /**
   * Function that fetches the playlist that we want to plei
   */
  const fetchPlaylist = useCallback(async () => {
    setLoading(true);

    const data = await getPlaylist("5Zr8lFNUaSzadkZZBTbHKt");

    if (data) {
      setPlaylist(data);
    }

    setLoading(false);
  }, []);

  // EFFECTS
  /**
   * Make sure to fetch the playlist as soon as we have loaded
   */
  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);

  /**
   * Initialzie the iframe spotify api
   */
  useEffect(() => {
    // Save the ref of iframe and controller after loading
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      // Assign the iframe to the player widget variable
      playerWidget.current = IFrameAPI;
    };
  });

  /**
   * Check if the widget has loaded and assign the playlist to it
   */
  useEffect(() => {
    if (playerWidget.current) {
      const element = document.getElementById("spotify-widget");

      const options = {
        uri: "",
        width: "100%",
        height: "100%",
      };

      // Save the reference to the controller for use later
      const callback = (EmbedController: any) => {
        playerController.current = EmbedController;
      };

      // Create the player widget
      if (element) {
        playerWidget.current.createController(element, options, callback);
      }
    }
  }, [playerWidget, loading]);

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist: playlist,
        loading: loading,
        playerController: playerController,
        playerWidget: playerWidget,
      }}
    >
      <div className="rounded-lg bg-fresia border-2 border-dark h-full w-full justify-start items-center py-2 overflow-y-auto gap-3 px-4">
        <MixTape />

        <Library />
      </div>
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayer;
