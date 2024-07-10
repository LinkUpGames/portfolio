import folderIcon from "pixelarticons/svg/folder.svg";
import ExperienceFileDescription from "./ExperienceFileDescription";
import { useContext, useState } from "react";
import { ExperienceContext } from "./ExperienceContext";

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

  // FUNCTIONS
  const handleClick = () => {
    updateDirectoryState(name, open);
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-fit border-l-2 border-l-black">
      {/* Logo and Directory name */}
      <button
        onClick={handleClick}
        className="w-full flex gap-2 items-center text-black mb-2"
      >
        <img src={folderIcon} className="w-6 h-6 object-fit" />

        <h2 className="text-base">{name}</h2>
      </button>

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
