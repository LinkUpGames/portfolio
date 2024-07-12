import WindowBorder from "@/components/desktop/Window";
import ExperienceHeader from "./ExperienceHeader";
import { ExperienceContext } from "./ExperienceContext";
import { useState } from "react";

const DEFAULT_FILESYSTEM_STATE: Directory = {
  name: "Experience",
  files: [
    {
      name: "Intro.exe",
      content: <>bruh</>,
    },
  ],
  open: true,
  directories: [
    // Fill it Forward
    {
      name: "Fill it Forward",
      open: false,
      files: [],
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

  // EXPERIENCES
  const experiences: Experience[] = [
    {
      company: "Fill it Forward",
      job: "Junior Software Engineer",
      time: "May 2023 - Present",
      description:
        "Create, deploy and form full stack web applications that support our infrastructure and our services",
      img: "",
    },
    {
      company: "Other Ocean Interactive",
      job: "Programmer",
      time: "April 2022 - Sept 2022",
      description:
        "Video Game Engineer creating tooling for the Unity game dev framework",
      img: "",
    },
    {
      company: "LinkUp Games",
      job: "Video Game Developer",
      time: "February 2019 - Present",
      description:
        "Building video games using different game engines, including Game Maker Studio and Godot",
      img: "",
    },
  ];

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
  ) => {
    // Recursively go down the tree and find the folder we want
    if (directory === undefined || directory === null) {
      // TODO: Throw the error and go to the error screen
      return;
    }

    if (directory.name === dirName) {
      console.log("Found it!", directory.name);
      console.log("Found Directory: ", directory);
      directory.open = value;

      setFilesystem((prev) => {
        // const directory = directory =
      });
      return;
    } else {
      directory.directories.forEach((dir) => {
        _updateDirectoryState(dirName, value, dir);
      });
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
      console.log("Directory not found");
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
    _updateDirectoryState(dirName, value, filesystem);
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
        className="!p-0 flex flex-row h-full w-full"
      >
        <div>
          <ExperienceHeader />
        </div>

        <div className="flex-grow">{content}</div>
      </WindowBorder>
    </ExperienceContext.Provider>
  );
};
