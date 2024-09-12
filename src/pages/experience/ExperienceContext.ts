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

/**
 * All functions and Props available to all components under the
 * Experience component and in the experience page
 */
interface ExperienceContextProps {
  /**
   * This is the directory that is being displayed on the side
   */
  filesystem: Directory;

  /**
   * Update the content displayed on the side of the directory
   *
   * @param element The component to render
   */
  showContent: (element: JSX.Element) => void;

  /**
   * Update the state of a current directory. The state
   * can either be opened or closed
   *
   * @param dirName The name of the directory to change
   * @param value Either opened (true) or closed (false)
   */
  updateDirectoryState: (dirName: string, value: boolean) => void;

  /**
   * Update the directory reference by replacing the state with a new one
   *
   * @param dir The new directory status
   */
  updateDirectory: (dir: Directory) => void;

  /**
   * Check if the current Directory is opened or not
   *
   * @param dirName The name of the directory
   */
  getDirectoryState: (dirName: string) => boolean;

  /**
   * Check whether the user has closed the file tree system
   */
  fileTreeClosed: boolean;
}

export const ExperienceContext = createContext<ExperienceContextProps>({
  filesystem: DUMMY_DIRECTORY,
  showContent: () => {},
  updateDirectoryState: () => {},
  getDirectoryState: () => false,
  updateDirectory: () => {},
  fileTreeClosed: false,
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
