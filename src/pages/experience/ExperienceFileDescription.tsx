import fileIcon from "pixelarticons/svg/file.svg";
import { useContext } from "react";
import { ExperienceContext } from "./ExperienceContext";

interface Props {
  file: SysFile;
}

const ExperienceFileDescription = ({ file }: Props) => {
  const name = file.name;
  const content = file.content;

  const { showContent } = useContext(ExperienceContext);

  // FUNCTIONS
  /**
   * Update the content displayed based on the file selected
   */
  const handleClick = () => {
    showContent(content);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-row text-left justify-start items-center w-full gap-2 text-black"
    >
      {/* Logo */}
      <img src={fileIcon} className="w-6 h-6 object-contain" alt="File Logo" />

      {/* Name */}
      <h2>{name}</h2>
    </button>
  );
};

export default ExperienceFileDescription;
