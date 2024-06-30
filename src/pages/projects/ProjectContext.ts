import { createContext } from "react";

interface ProjectContextProps {
  open: boolean;
  handleOpen: (value: React.SetStateAction<boolean>) => void;
}

export const ProjectContext = createContext<ProjectContextProps>({
  open: false,
  handleOpen: () => { },
});
