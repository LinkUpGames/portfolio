import { CiFileOn } from "react-icons/ci";
import { motion } from "motion/react";
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
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      const file = searchParams.get("file");

      if (file) {
        params.set("file", name);
      } else {
        params.append("file", name);
      }

      return params;
    });
  };

  /**
   * Highligh if the file is highlighted in the url params
   */
  useEffect(() => {
    const fileName = searchParams.get("file");

    if (fileName && fileName === name) {
      setTextColor("blue");
    } else {
      setTextColor("white");
    }
  }, [searchParams]);

  return (
    <motion.button
      onClick={handleClick}
      className="flex flex-row text-left justify-start items-center w-full gap-2 text-white hover:border-gold hover:border-2 border-0"
      whileTap={{
        scale: 0.9,
      }}
    >
      {/* Logo */}
      <CiFileOn className="w-6 h-6 object-contain" />

      {/* Name */}
      <h2 className={`text-base text-${textColor} duration-200 transition-all`}>
        {name}
      </h2>
    </motion.button>
  );
};

export default ExperienceFileDescription;
