// NOTE: This is to extend the current window to use the global script for the spotify api
interface Window {
  onSpotifyIframeApiReady: (IFrameApi: any) => void;
}

interface Option {
  name: string;
  component?: JSX.Element;
}

interface Position {
  x: number;
  y: number;
}

interface MenuText {
  home: {
    title: string;
    title_card: string;
    introduction: string;
  };
}

interface LauncherIcon {
  name: string;
  icon: JSX.Element;
  component: JSX.Element;
}

interface AppIconProps {
  element: LauncherIcon;
  mouseX: MotionValue;
}

interface Experience {
  company: string;
  job: string;
  time: string;
  img: string;
  description: string;
}

interface Directory {
  name: string;
  files: SysFile[];
  directories: Directory[];
  open: boolean;
}

interface SysFile {
  name: string;
  content: JSX.Element;
}

interface FileSystemStructure {
  directory: Directory;
}

interface Message {
  icon: string;
  color: string;
  sender: number;
  text: string;
}

interface MusicPlaylist {
  tracks: MusicTrack[];
  name: string;
  id: string;
}

interface MusicTrack {
  name: string;
  link: string;
  id: string;
  images: MusicTrackImage[];
}

interface MusicTrackImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyIFrame {
  createController: (
    element: HTMLElement,
    options: any,
    callback: (a: any) => void,
  ) => void;
}

interface SpotifyController {
  loadUri: (uri: string) => void;
  play: () => void;
  destroy: () => void;
}
