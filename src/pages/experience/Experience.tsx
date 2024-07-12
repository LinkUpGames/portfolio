import WindowBorder from "@/components/desktop/Window";
import ExperienceHeader from "./ExperienceHeader";
import { ExperienceContext } from "./ExperienceContext";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceIntro from "./ExperienceIntro";

// EXPERIENCES
const experiences: Record<string, Experience> = {
  fif: {
    company: "Fill it Forward",
    job: "Junior Software Engineer",
    time: "May 2023 - Present",
    description:
      "Create, deploy and form full stack web applications that support our infrastructure and our services",
    img: "",
  },
  ooi: {
    company: "Other Ocean Interactive",
    job: "Programmer",
    time: "April 2022 - Sept 2022",
    description:
      "Video Game Engineer creating tooling for the Unity game dev framework",
    img: "",
  },
  lug: {
    company: "LinkUp Games",
    job: "Video Game Developer",
    time: "February 2019 - Present",
    description:
      "Building video games using different game engines, including Game Maker Studio and Godot",
    img: "",
  },
};

const DEFAULT_FILESYSTEM_STATE: Directory = {
  name: "Experience",
  files: [
    {
      name: "Intro.txt",
      content: <ExperienceIntro />,
    },
  ],
  open: true,
  directories: [
    // Fill it Forward
    {
      name: "Fill it Forward",
      open: false,
      files: [
        {
          name: "Experience.txt",
          content: <ExperienceCard experience={experiences.fif} />,
        },
      ],
      directories: [
        {
          name: "Projects",
          open: false,
          files: [
            {
              name: "Portal.iso",
              content: <></>,
            },
          ],
          directories: [],
        },
      ],
    },
  ],
};

export const Experience = () => {
  // FILE SYSTEM
  const [filesystem, setFilesystem] = useState<Directory>(
    DEFAULT_FILESYSTEM_STATE,
  );

  // STATES
  const [content, setContent] = useState<JSX.Element>(<> hello</>); // The content to be shown on the right hand of the directory tree

  // FUNCTIONS
  /**
   * The content to display on the side
   */
  const showContent = (element: JSX.Element) => {
    setContent(element);
  };

  /**
   * Update the directory state by showing it and not hiding it
   * @param dirName The directory to update
   * @param value The value for the directory
   */

  const _updateDirectoryState = (
    dirName: string,
    value: boolean,
    directory: Directory,
  ): Directory => {
    // Recursively go down the tree and find the folder we want
    if (!directory) {
      // Handle the case where directory is undefined or null
      return directory;
    }

    if (directory.name === dirName) {
      // If this is the directory we want to update
      const updatedDirectory: Directory = { ...directory, open: value };

      // Return the updated directory
      return updatedDirectory;
    } else {
      // Recursively update directories within this directory
      const updatedDirectories = directory.directories.map((dir) =>
        _updateDirectoryState(dirName, value, dir),
      );

      // Return a new directory object with updated directories
      return { ...directory, directories: updatedDirectories };
    }
  };

  /**
   * Get the state of the directory based on the name given
   * @param dirName The name of the directory to query
   * @param directory The subdirectory that we are going to be using
   */
  const _getDirectoryState = (
    dirName: string,
    directory: Directory,
  ): boolean => {
    if (directory === undefined || directory === null) {
      // TODO: Throw the error and go to the error screen
      return false;
    }

    // Recursivey go down and get the folder we want
    if (directory.name === dirName) {
      return directory.open;
    } else {
      directory.directories.forEach((dir) => {
        _getDirectoryState(dirName, dir);
      });
    }

    return false;
  };

  /**
   * Get the state of a directory given its name
   * @param dirName The name of the directory
   */
  const getDirectoryState = (dirName: string) => {
    return _getDirectoryState(dirName, filesystem);
  };

  /**
   * Wrapper function that initializes the search
   * @param dirName The name of the directory
   * @param value The value (open or not open?)
   */
  const updateDirectoryState = (dirName: string, value: boolean) => {
    const updatedFileSystem = _updateDirectoryState(dirName, value, filesystem);

    // Update the actual updated filesystem
    setFilesystem(updatedFileSystem);
  };

  return (
    <ExperienceContext.Provider
      value={{
        showContent: showContent,
        updateDirectoryState: updateDirectoryState,
        getDirectoryState: getDirectoryState,
        filesystem: filesystem,
      }}
    >
      <WindowBorder
        title="Experience"
        className="!p-0 flex md:flex-row flex-col h-full w-full"
      >
        <div className="md:min-w-fit md:w-fit min-h-36 md:min-h-full max-h-52 md:max-h-full overflow-y-auto">
          <ExperienceHeader />
        </div>

        <div className="flex-grow p-4 border-2 border-red overflow-y-auto">
          {content}
        </div>
      </WindowBorder>
    </ExperienceContext.Provider>
  );
};
