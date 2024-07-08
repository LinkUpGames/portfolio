import { createContext } from "react";

const DUMMY_DIRECTORY: Directory = {
  directories: [],
  files: [],
  name: "default",
};

interface ExperienceContextProps {
  filesystem: Directory;
}

export const ExperienceContext = createContext<ExperienceContextProps>({
  filesystem: DUMMY_DIRECTORY,
});
