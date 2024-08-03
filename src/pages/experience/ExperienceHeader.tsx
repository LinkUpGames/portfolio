import { useContext, useEffect } from "react";
import { ExperienceContext } from "./ExperienceContext";
import ExperienceDirectory from "./ExperienceDirectory";
import { useSearchParams } from "react-router-dom";

const ExperienceHeader = () => {
  const { filesystem, updateDirectory } = useContext(ExperienceContext);

  // SEARCH PARAMS
  const [searchParams, _setSearchParams] = useSearchParams();

  // FUNCTIONS
  /**
   * Updates the folders by going through it and checking which folder to open completely
   */
  const updateFolders = (directory: Directory, filename: string): Directory => {
    if (!directory) {
      return directory;
    }

    // Check if the file exists in the current directory we are in
    for (const file of directory.files) {
      if (file.name === filename) {
        return { ...directory, open: true };
      }
    }

    // Recursively updated other directories
    let found = false; // Check if the file exists in the current directory
    const updatedDirectories = directory.directories.map((dir) => {
      const updatedDir = updateFolders(dir, filename);

      found = updatedDir.open;

      return updatedDir;
    });

    // Propogate the open up the parent directory
    if (found) {
      return { ...directory, directories: updatedDirectories, open: true };
    }

    return { ...directory, directories: updatedDirectories };
  };

  /**
   * Search and open the appropriate folder
   * @param file The file that we are searching for
   */
  const searchForDirectory = (file: string) => {
    // Copy the file System so that we can start going down the rabbit whole
    const newFileSystem: Directory = updateFolders(filesystem, file);

    updateDirectory(newFileSystem);
  };

  // EFFECTS
  /**
   * Open the right amount of directory to where the file is located at when the
   * website is opened at first
   */
  useEffect(() => {
    const fileName = searchParams.get("file") ?? "";

    searchForDirectory(fileName);
  }, []);

  return (
    <div className="w-full h-full bg-yellow overflow-x-auto py-2 px-2 border-r-2 border-r-green">
      {/* Recursive Filesystem */}
      <ExperienceDirectory directory={filesystem} />
    </div>
  );
};

export default ExperienceHeader;
