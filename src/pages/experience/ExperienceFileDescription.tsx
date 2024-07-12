import fileIcon from "pixelarticons/svg/file.svg";
import { useContext } from "react";
import { ExperienceContext } from "./ExperienceContext";
import { motion } from "framer-motion";

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
    <motion.button
      onClick={handleClick}
      className="flex flex-row text-left justify-start items-center w-full gap-2 text-black hover:border-black hover:border-2 border-0"
      whileTap={{
        scale: 0.9,
      }}
    >
      {/* Logo */}
      <img src={fileIcon} className="w-6 h-6 object-contain" alt="File Logo" />

      {/* Name */}
      <h2>{name}</h2>
    </motion.button>
  );
};

export default ExperienceFileDescription;
