import { motion } from "motion/react";
import ProjectInfo from "./ProjectInfo";
import { useState } from "react";
import { ProjectContext } from "./ProjectContext";

interface Props {
  name: string;
  image: string;
  onHover: () => void;
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
  onHover,
  info = {
    title: "",
    summary: "",
    link: "",
    images: [],
    widget: <></>,
  },
}: Props) => {
  // STATES
  // Check if the current icon has been pressed and therefore opened
  const [open, setOpen] = useState(false);

  // FUNCTIONS
  const handleOpen = (e: MouseEvent | TouchEvent | PointerEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <ProjectContext.Provider
      value={{
        open: open,
        handleOpen: setOpen,
      }}
    >
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
          onTap={(e) => handleOpen(e)}
          className="cursor-pointer flex flex-col justify-center items-center p-2 relative"
        >
          <motion.img
            alt={name}
            draggable={false}
            className="w-28 h-28 lg:h-36 lg:w-36 object-contain"
            onHoverStart={onHover}
            onTap={onHover}
            src={image}
          />
          <h3 className="text-center text-xl md:text-lg text-dark uppercase underline">
            {name}
          </h3>
        </motion.div>
      </ProjectInfo>
    </ProjectContext.Provider>
  );
};

export default Icon;
