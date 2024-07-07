import { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

interface Directory {
  name: string;
  open: boolean;
  file: string;
  directories: Directory[];
}

interface File {
  name: string;
  experience: Experience;
}

const ExperienceHeader = () => {
  return (
    <div className="h-full w-fit bg-yellow absolute top-0 left-0 px-4 py-2">
      {/* Folder Icon */}
      brh
    </div>
  );
};

export default ExperienceHeader;
