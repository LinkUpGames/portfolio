import { motion } from "motion/react";

interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  const percentage = +(level * 100).toFixed(2);

  const bgColor =
    percentage >= 85 ? "bg-green" : percentage >= 60 ? "bg-yellow" : "bg-red";
  const borderColor =
    percentage >= 85
      ? "border-green"
      : percentage >= 60
        ? "border-yellow"
        : "border-red";

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-3 gap-0">
      {/* The name and the image for the skill */}
      <div className="w-full flex flex-col gap-2 lg:flex-row justify-center md:justify-start items-center lg:gap-4">
        <img
          draggable={false}
          src={image}
          className="h-12 w-12 object-contain rounded-full bg-[#FFFFFF]"
        />

        <h2 className="text-white text-base lg:text-xs 2xl::text-lg text-left text-wrap inline-block">
          {name}
        </h2>
      </div>

      {/* Progress for Skill */}
      <div className="w-full">
        {/* Percentage */}
        <h3 className="text-white">{percentage}%</h3>

        <div className={`w-full ${borderColor} border-[1px] h-6`}>
          <motion.div
            className={`w-full ${bgColor} h-full`}
            animate={{
              width: `${percentage}%`,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.2,
              },
            }}
            style={{
              width: "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
