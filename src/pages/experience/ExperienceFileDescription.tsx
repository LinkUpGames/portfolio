import fileIcon from "pixelarticons/svg/file.svg";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  file: SysFile;
}

const ExperienceFileDescription = ({ file }: Props) => {
  const name = file.name;
  const [searchParams, setSearchParams] = useSearchParams();

  // STATES
  const [textColor, setTextColor] = useState("black"); // The color of the text based on highlight

  // FUNCTIONS
  /**
   * Update the content displayed based on the file selected
   */
  const handleClick = () => {
    // Add the file to the query paora
    setSearchParams((prev) => ({
      ...prev,
      file: name,
    }));
  };

  /**
   * Highligh if the file is highlighted in the url params
   */
  useEffect(() => {
    const fileName = searchParams.get("file");

    if (fileName && fileName === name) {
      setTextColor("red");
    } else {
      setTextColor("black");
    }
  }, [searchParams]);

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
      <h2 className={`text-base text-${textColor} duration-200 transition-all`}>
        {name}
      </h2>
    </motion.button>
  );
};

export default ExperienceFileDescription;
