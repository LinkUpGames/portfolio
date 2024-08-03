import { createContext } from "react";

const DUMMY_DIRECTORY: Directory = {
  directories: [],
  open: false,
  files: [],
  name: "default",
};

interface ExperienceContextProps {
  filesystem: Directory;
  showContent: (element: JSX.Element) => void;
  updateDirectoryState: (dirName: string, value: boolean) => void;
  updateDirectory: (dir: Directory) => void;
  getDirectoryState: (dirName: string) => boolean;
}

export const ExperienceContext = createContext<ExperienceContextProps>({
  filesystem: DUMMY_DIRECTORY,
  showContent: () => {},
  updateDirectoryState: () => {},
  getDirectoryState: () => false,
  updateDirectory: () => {},
});
