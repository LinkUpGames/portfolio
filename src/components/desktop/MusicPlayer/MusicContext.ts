import { createContext } from "react";

export const DUMMY_PLAYLIST: MusicPlaylist = {
  id: "",
  tracks: [],
  name: "",
};

interface MusicPlayerContextProps {
  playlist: MusicPlaylist;
}

export const MusicPlayerContext = createContext<MusicPlayerContextProps>({
  playlist: DUMMY_PLAYLIST,
});
