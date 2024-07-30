import { createContext, MutableRefObject } from "react";

export const DUMMY_PLAYLIST: MusicPlaylist = {
  id: "",
  tracks: [],
  name: "",
};

export const DUMMY_TRACK: MusicTrack = {
  id: "",
  link: "",
  images: [],
  name: "",
};

interface MusicPlayerContextProps {
  playlist: MusicPlaylist;
  loading: boolean;
  playerWidget: MutableRefObject<SpotifyIFrame | null>;
  playerController: MutableRefObject<SpotifyController | null>;
  currentTrack: MusicTrack;
  closeWidget: () => void;
  playTrack: (track: MusicTrack) => void;
}

export const MusicPlayerContext = createContext<MusicPlayerContextProps>({
  playlist: DUMMY_PLAYLIST,
  loading: false,
  playerWidget: { current: null },
  playerController: { current: null },
  currentTrack: DUMMY_TRACK,
  closeWidget: () => {},
  playTrack: () => {},
});
