import { IoIosSave } from "react-icons/io";

const SkillHeader = () => {
  return (
    <div className="bg-dark-status w-full flex flex-col md:flex-row items-start md:items-center justify-between p-2 mb-4">
      {/* Icon With Skill stuff */}
      <div className="w-full h-full flex flex-col justify-center md:justify-start md:flex-row gap-2 items-center">
        <IoIosSave size={50} color="#FFFFFF" />

        <div className="flex flex-col text-center md:text-left text-black gap-4 md:gap-0">
          <h2 className="text-lg md:text-3xl text-white underline">
            Languages, Frameworks, Tools
          </h2>
          <h4 className="text-base text-light md:text-lg">
            Below is an estimate in how proficient I am with the following tools
            specified below
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SkillHeader;
