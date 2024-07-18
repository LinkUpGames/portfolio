import { useContext } from "react";
import { ExperienceContext } from "./ExperienceContext";
import ExperienceDirectory from "./ExperienceDirectory";

const ExperienceHeader = () => {
  const { filesystem } = useContext(ExperienceContext);

  return (
    <div className="w-full h-full bg-yellow overflow-x-auto py-2 px-2 border-r-2 border-r-green">
      {/* Recursive Filesystem */}
      <ExperienceDirectory directory={filesystem} />
    </div>
  );
};

export default ExperienceHeader;
