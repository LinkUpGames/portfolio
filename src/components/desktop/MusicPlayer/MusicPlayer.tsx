import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { getPlaylist } from "./Spotify";
import {
  DUMMY_PLAYLIST,
  DUMMY_TRACK,
  MusicPlayerContext,
} from "./MusicContext";
import Library from "./Library";
import MixTape from "./MixTape";
import MusicHeader from "./MusicHeader";
import { AppContext } from "@/AppContext";

const MusicPlayer = () => {
  // CONTEXT
  const { changePopup } = useContext(AppContext);

  // STATES
  const [loading, setLoading] = useState<boolean>(true); // Check if we are loading any external information
  const [playlist, setPlaylist] = useState<MusicPlaylist>(DUMMY_PLAYLIST); // The music track that we want to display
  const [track, setTrack] = useState<MusicTrack>(DUMMY_TRACK); // The current track playing

  // NOTE: https://developer.spotify.com/documentation/embeds/references/iframe-api#embedcontrollertoggleplay
  const playerWidget = useRef<SpotifyIFrame | null>(null); // This is the  player widget that will be added to the music player
  const playerController = useRef<SpotifyController | null>(null); // This is the player controller responsible for moving the widget values

  // FUNCTIONS
  /**
   * Close the music player by assigning the popup to null
   */
  const closeWidget = () => {
    changePopup(null);
  };

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

  /**
   * Update the song playing by passing the current track to play
   */
  const playTrack = (track: MusicTrack) => {
    const controller = playerController.current;

    if (controller) {
      const uri = track.link;

      // NOTE: This seems to be working and allows the music to play seamlessly
      controller.loadUri(uri);
      controller.play();

      // Update the current track playing
      setTrack(track);
    }
  };

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
        currentTrack: track,
        closeWidget: closeWidget,
        playTrack: playTrack,
      }}
    >
      <div className="rounded-lg bg-fresia border-2 border-dark h-full w-full justify-start items-center py-2 overflow-y-auto gap-3 px-4 backdrop-blur-sm bg-opacity-65">
        <MusicHeader />

        <MixTape />

        <Library />
      </div>
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayer;
