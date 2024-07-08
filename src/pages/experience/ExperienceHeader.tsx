import { useContext, useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { ExperienceContext } from "./ExperienceContext";
import ExperienceDirectory from "./ExperienceDirectory";

const ExperienceHeader = () => {
  const { filesystem } = useContext(ExperienceContext);

  return (
    <div className="h-full w-fit bg-yellow absolute top-0 left-0 max-w-md overflow-x-auto">
      {/* Recursive Filesystem */}
      <ExperienceDirectory directory={filesystem} />
    </div>
  );
};

export default ExperienceHeader;
