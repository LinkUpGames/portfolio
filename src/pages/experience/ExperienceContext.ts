import { createContext } from "react";
import FIF from "@/pages/experience/Files/FillitForward/FIF.md";
import OOI from "@/pages/experience/Files/OtherOceanInterative/OOI.md";
import LUG from "@/pages/experience/Files/LUG/lug.md";

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

export const experiences: Record<string, Experience> = {
  fif: {
    company: "Fill it Forward",
    job: "💻 Junior Software Engineer",
    time: "May 2023 - Pesent",
    description: FIF,
  },
  ooi: {
    company: "Other Ocean Interactive",
    job: "Programmer",
    time: "April 2022 - Sept 2022",
    description: OOI,
  },
  lug: {
    company: "LinkUp Games",
    job: "Video Game Developer",
    time: "February 2019 - Present",
    description: LUG,
  },
};
