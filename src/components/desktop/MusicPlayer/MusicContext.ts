import { createContext, MutableRefObject } from "react";

export const DUMMY_PLAYLIST: MusicPlaylist = {
  id: "",
  tracks: [],
  name: "",
};

interface MusicPlayerContextProps {
  playlist: MusicPlaylist;
  loading: boolean;
  playerWidget: MutableRefObject<any>;
  playerController: MutableRefObject<any>;
}

export const MusicPlayerContext = createContext<MusicPlayerContextProps>({
  playlist: DUMMY_PLAYLIST,
  loading: false,
  playerWidget: { current: null },
  playerController: { current: null },
});
