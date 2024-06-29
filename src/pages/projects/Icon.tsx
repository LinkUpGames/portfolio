import { motion } from "framer-motion";

interface Props {
  name: string;
  image: string;
}

const Icon = ({ name = "", image = "" }: Props) => {
  return (
    <motion.div
      draggable={false}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      onTap={(e) => e.preventDefault()}
      className="cursor-pointer flex flex-col justify-center items-center p-2 relative"
    >
      <motion.img
        alt={name}
        className="w-28 h-28 md:h-20 md:w-20 object-contain"
        src={image}
      />
      <h3 className="text-center text-xl md:text-lg text-dark uppercase underline">
        {name}
      </h3>
    </motion.div>
  );
};

export default Icon;
