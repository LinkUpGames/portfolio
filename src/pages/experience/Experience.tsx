import WindowBorder from "@/components/desktop/Window";
import { FaArrowCircleLeft } from "react-icons/fa";
import ExperienceHeader from "./ExperienceHeader";
import { ExperienceContext, experiences } from "./ExperienceContext";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceIntro from "./ExperienceIntro";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ExperienceMarkdown from "./ExperienceMarkdown";
import PortalMD from "./Files/FillitForward/Portal.md";

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
          name: "FIF-Experience.md",
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
              content: <ExperienceMarkdown file={PortalMD} />,
            },
          ],
          directories: [],
        },
      ],
    },
    // Other Ocean Interactive
    {
      name: "Other Ocean Interactive",
      open: false,
      files: [
        {
          name: "OOI-Experience.md",
          content: <ExperienceCard experience={experiences.ooi} />,
        },
      ],
      directories: [],
    },
    // LinkUp Games
    {
      name: "LinkUp Games",
      open: false,
      files: [
        {
          name: "L.U.G-Experience.md",
          content: <ExperienceCard experience={experiences.lug} />,
        },
      ],
      directories: [],
    },
  ],
};

export const Experience = () => {
  // FILE SYSTEM
  const [filesystem, setFilesystem] = useState<Directory>(
    DEFAULT_FILESYSTEM_STATE,
  );

  // SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  // STATES
  const [content, setContent] = useState<JSX.Element>(<> hello</>); // The content to be shown on the right hand of the directory tree
  const [fileTreeClosed, setFileTreeClosed] = useState<boolean>(false); // We default the file tree to opened

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

  /**
   * The function that recursively searches for the file based on the files in the file system
   */
  const _getFileFromDirectory = (
    fileName: string,
    directory: Directory,
  ): SysFile | null => {
    if (
      directory === undefined ||
      directory === null ||
      directory.files.length === 0
    ) {
      return null;
    } else {
      // Search through the directory for the file
      for (const file of directory.files) {
        if (file.name === fileName) {
          // Found it
          return file;
        }
      }

      /**
       * NOTE: You cannot use any array function as it creates it's own scope and when returning
       * we cannot return the original conetxt back up
       */
      for (const dir of directory.directories) {
        const file = _getFileFromDirectory(fileName, dir);

        if (file !== null) {
          return file;
        }
      }
    }

    return null;
  };

  /**
   * Get a particular file from the system based on the name
   * @param fileName The name of the file we are searching for
   */
  const getFileFromDirectory = (fileName: string) => {
    const file: SysFile | null = _getFileFromDirectory(fileName, filesystem);

    return file;
  };

  /**
   * Get the current file based on the query string in the url
   */
  const getCurrentFile = () => {
    // Get the file name
    const DEFAULT_FILE = "Intro.txt";
    const fileName = searchParams.get("file");

    // Iterate over the file system and get the correct file to display
    const file = getFileFromDirectory(fileName ?? "");

    // Render the file int the screen
    if (file) {
      showContent(file.content);
    } else {
      // Default to the Intro txt
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        const file = searchParams.get("file");

        if (file) {
          params.set("file", DEFAULT_FILE);
        } else {
          params.append("file", DEFAULT_FILE);
        }

        return params;
      });
    }
  };

  /**
   * Update the whole directory with a new version
   * @param dir The new directory that we will replace it with
   */
  const updateDirectory = (dir: Directory) => {
    setFilesystem(dir);
  };

  // EFFECTS
  /**
   * Check if there is a file param in the url
   */
  useEffect(() => {
    getCurrentFile();
  }, [searchParams]);

  return (
    <ExperienceContext.Provider
      value={{
        showContent: showContent,
        updateDirectoryState: updateDirectoryState,
        getDirectoryState: getDirectoryState,
        updateDirectory: updateDirectory,
        filesystem: filesystem,
      }}
    >
      <WindowBorder
        title="Experience"
        className="!p-0 flex md:flex-row flex-col h-full w-full"
        windowClassName="h-full"
      >
        <div
          className={`md:min-w-fit ${fileTreeClosed ? "h-12" : "h-auto max-h-72"} transition-all ease-in-out duration-500 md:h-auto md:min-h-full md:w-fit overflow-y-auto relative`}
        >
          {/* The Button To open and Close */}
          <motion.div
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{
              scale: 1.3,
            }}
            onClick={() => setFileTreeClosed((prev) => !prev)}
            className={`absolute w-8 h-8 top-0 right-3 cursor-pointer block md:hidden flex-grow-0 mt-2`}
          >
            <FaArrowCircleLeft
              size="100%"
              className={`${fileTreeClosed ? "rotate-0" : "-rotate-90"}`}
              color="#FFFFFF"
            />
          </motion.div>

          <ExperienceHeader />
        </div>

        <div className="flex-grow p-4 border-2 border-red overflow-y-auto flex-1">
          {content}
        </div>
      </WindowBorder>
    </ExperienceContext.Provider>
  );
};
