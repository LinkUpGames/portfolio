import { useContext, useEffect } from "react";
import { ExperienceContext } from "./ExperienceContext";
import ExperienceDirectory from "./ExperienceDirectory";
import { useSearchParams } from "react-router-dom";

const ExperienceHeader = () => {
  const { filesystem, updateDirectory } = useContext(ExperienceContext);

  // SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  // FUNCTIONS
  /**
   * Updates the folders by going through it and checking which folder to open completely
   */
  const updateFolders = (dir: Directory, filename: string) => {
    // todo: recurse through file structure and open the appropriate directories
    const files = dir.files;

    for (const file of files) {
      if (file.name === filename) {
        console.log("FOUND IT HERE");
      } else {
        const childDirs = dir.directories;

        for (const childDir of childDirs) {
          updateFolders(childDir, filename);
        }
      }
    }
  };

  /**
   * Search and open the appropriate folder
   * @param file The file that we are searching for
   */
  const searchForDirectory = (file: string) => {
    // Copy the file System so that we can start going down the rabbit whole
    const newFileSystem: Directory = updateFolders(filesystem, file);
    // updateDirectory(newFileSystem);
  };

  // EFFECTS
  /**
   * Open the right amount of directory to where the file is located at when the
   * website is opened at first
   */
  useEffect(() => {
    // TODO: Continue from here
    const fileName = searchParams.get("file") ?? "";

    searchForDirectory(fileName);
    console.log("FILENAME: ", fileName);
  }, []);

  return (
    <div className="w-full h-full bg-yellow overflow-x-auto py-2 px-2 border-r-2 border-r-green">
      {/* Recursive Filesystem */}
      <ExperienceDirectory directory={filesystem} />
    </div>
  );
};

export default ExperienceHeader;
