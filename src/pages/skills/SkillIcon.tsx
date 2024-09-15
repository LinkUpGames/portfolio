import { motion } from "framer-motion";

interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  const percentage = +(level * 100).toFixed(2);

  const color =
    percentage >= 85 ? "green" : percentage >= 60 ? "yellow" : "red";

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-3 gap-0">
      {/* The name and the image for the skill */}
      <div className="w-full flex flex-col gap-2 lg:flex-row justify-center md:justify-start items-center lg:gap-4">
        <img
          draggable={false}
          src={image}
          className="h-12 w-12 object-contain rounded-full bg-[#FFFFFF]"
        />
        <h2 className="text-white text-base lg:text-xl text-left text-wrap inline-block">
          {name}
        </h2>
      </div>

      {/* Progress for Skill */}
      <div className="w-full">
        {/* Percentage */}
        <h3 className="text-white">{percentage}%</h3>

        <div className={`w-full border-${color} border-[1px] h-6`}>
          <motion.div
            className={`w-full bg-${color} h-full`}
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
