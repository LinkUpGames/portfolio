import { motion } from "motion/react";
import { useMemo } from "react";

interface Props {
  componentRender: JSX.Element | null;
}

const Popup = ({ componentRender }: Props) => {
  // MEMOS
  /**
   * The component we want to render
   */
  const component = useMemo<JSX.Element | null>(() => {
    return componentRender;
  }, [componentRender]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={`${component ? "absolute" : "hidden"} z-9999 h-[95%] w-full`}
    >
      <div className="flex justify-center items-center w-full h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={component ? "visible" : "hidden"}
          className="max-w-[90%] max-h-[95%] w-full h-full overflow-auto"
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {component && component}
        </motion.div>
      </div>
    </div>
  );
};

export default Popup;
