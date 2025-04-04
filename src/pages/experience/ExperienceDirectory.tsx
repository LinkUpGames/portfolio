import ExperienceFileDescription from "./ExperienceFileDescription";
import { useContext, useEffect, useState } from "react";
import { ExperienceContext } from "./ExperienceContext";
import { motion } from "motion/react";
import { CiFolderOn } from "react-icons/ci";

interface Props {
  directory: Directory;
}

const ExperienceDirectory = ({ directory }: Props) => {
  // CONTANTS
  const { updateDirectoryState } = useContext(ExperienceContext);
  const name = directory.name;
  const files = directory.files;
  const childDirectories = directory.directories;

  // STATES
  const [open, setOpen] = useState<boolean>(false);

  // EFFECTS
  /**
   * Change the value of the open state based on the changes to the directory
   */
  useEffect(() => {
    setOpen(directory.open);
  }, [directory]);

  // FUNCTIONS
  /**
   * Update the status of the folder value
   *
   * This will update everything
   */
  const handleClick = () => {
    const newOpenValue = !open;

    updateDirectoryState(name, newOpenValue);
  };

  return (
    <div className="w-full h-fit border-l-2 border-l-gold">
      {/* Logo and Directory name */}
      <motion.button
        onClick={handleClick}
        className="w-full flex gap-2 items-center text-white mb-2 hover:border-b-2 hover:border-gold border-0"
        whileTap={{
          scale: 0.9,
        }}
      >
        <CiFolderOn className="w-6 h-6 ml-2" />

        <h2 className="text-base text-nowrap">{name}</h2>
      </motion.button>

      {/* Content */}
      {open && (
        <div className="w-full flex flex-col justify-start items-center px-4 gap-2">
          {/* Files */}
          {files.map((file) => (
            <ExperienceFileDescription key={file.name} file={file} />
          ))}

          {/* Directories */}
          {childDirectories.map((dir) => (
            <ExperienceDirectory key={dir.name} directory={dir} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceDirectory;
