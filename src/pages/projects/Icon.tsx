import { motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";

interface Props {
  name: string;
  image: string;
  info: {
    title: string;
    summary: string;
    link: string;
    images: string[];
    widget: JSX.Element;
  };
}

const Icon = ({
  name = "",
  image = "",
  info = {
    title: "",
    summary: "",
    link: "",
    images: [],
    widget: <></>,
  },
}: Props) => {
  return (
    <ProjectInfo info={info}>
      <motion.div
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
        className="cursor-pointer flex flex-col justify-center items-center p-2 relative"
      >
        <motion.img
          alt={name}
          draggable={false}
          className="w-28 h-28 md:h-20 md:w-20 object-contain"
          src={image}
        />
        <h3 className="text-center text-xl md:text-lg text-dark uppercase underline">
          {name}
        </h3>
      </motion.div>
    </ProjectInfo>
  );
};

export default Icon;
