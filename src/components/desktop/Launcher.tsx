import { motion, useMotionValue, useTransform } from "framer-motion";
import chatIcon from "pixelarticons/svg/chat.svg";
import musicIcon from "pixelarticons/svg/music.svg";

const Launcher = () => {
  // Framer Motion
  let mouseX = useMotionValue(0);
  let width = useTransform(mouseX, [200, 250, 400], [20, 40, 20]);

  // The elements that are being shown at the button
  const elements: Option[] = [
    {
      name: "chat",
      component: <img className="" src={chatIcon} />,
    },
    {
      name: "music",
      component: <img className="" src={musicIcon} />,
    },
    {
      name: "music",
      component: <img className="" src={musicIcon} />,
    },
    {
      name: "music",
      component: <img className="" src={musicIcon} />,
    },
    {
      name: "music",
      component: <img className="" src={musicIcon} />,
    },
  ];

  // Functions
  // const updateMousePosition()

  return (
    <div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        console.log(e.pageX);
      }}
      className="fixed bottom-10 mt-auto"
    >
      <motion.ul className="backdrop-blur-sm bg-red bg-opacity-60 rounded-md mx-auto flex gap-4 h-16 items-end px-4 pb-3">
        {elements.map((elem, index) => (
          <motion.li
            style={{ width }}
            key={index}
            className="aspect-square w-10 rounded-full"
          >
            {elem.component}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Launcher;
