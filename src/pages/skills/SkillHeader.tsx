import saveIcon from "pixelarticons/svg/save.svg";

const SkillHeader = () => {
  return (
    <div className="bg-red w-full flex flex-col md:flex-row items-start md:items-center justify-between p-2 mb-4">
      {/* Icon With Skill stuff */}
      <div className="w-full h-full flex flex-row gap-2 items-center">
        <img src={saveIcon} className="h-12 w-auto" />

        <div className="flex flex-col text-black gap-0">
          <h2 className="text-lg md:text-3xl text-white"> Skills</h2>
          <h4 className="text-base md:text-lg">
            The skills I have aquired over the years
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SkillHeader;
