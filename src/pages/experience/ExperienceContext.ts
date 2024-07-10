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
}

export const ExperienceContext = createContext<ExperienceContextProps>({
  filesystem: DUMMY_DIRECTORY,
  showContent: () => {},
  updateDirectoryState: () => {},
});
