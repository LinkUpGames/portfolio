import { motion } from "framer-motion";

interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  const percentage = +(level * 100).toFixed(2);

  const color =
    percentage >= 85 ? "bg-green" : percentage >= 65 ? "bg-yellow" : "bg-red";

  return (
    <div className="w-full flex items-center justify-between">
      {/* The name and the image for the skill */}
      <div className="flex flex-row gap-1 justify-start items-center w-full">
        <img
          draggable={false}
          src={image}
          className="h-12 w-12 object-contain rounded-full"
        />
        <h2 className="text-black text-base md:text-xl text-left text-wrap">
          {name}
        </h2>
      </div>

      {/* Progress for Skill */}
      <div className="w-full">
        {/* Percentage */}
        <h3>{percentage}%</h3>

        <div className="w-full border-dark border-2 h-6">
          <motion.div
            className={`w-full ${color} h-full`}
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
