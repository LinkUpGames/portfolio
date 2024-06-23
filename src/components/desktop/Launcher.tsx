import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import chatIcon from "pixelarticons/svg/chat.svg";
import musicIcon from "pixelarticons/svg/music.svg";
import socialsIcon from "pixelarticons/svg/user.svg";
import githubIcon from "pixelarticons/svg/github.svg";

import { useRef } from "react";

const Launcher = () => {
  // Framer Motion
  let mouseX = useMotionValue(Infinity);

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
      name: "socials",
      component: <img className="" src={socialsIcon} />,
    },
    {
      name: "github",
      component: <img className="" src={githubIcon} />,
    },
  ];

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-10 mt-auto"
    >
      <motion.ul className="backdrop-blur-sm bg-red bg-opacity-60 rounded-md mx-auto flex gap-4 h-16 items-end px-4 pb-3">
        {elements.map((elem, index) => (
          <AppIcon key={index} component={elem.component!} mouseX={mouseX} />
        ))}
      </motion.ul>
    </div>
  );
};

/**
 * The app icon that is used in the docker
 * The use of framer motion allows for smooth animations
 */
const AppIcon = ({ component, mouseX }: AppIconProps) => {
  // REFS
  const ref = useRef<HTMLLIElement>(null);

  // FRAMER MOTION
  // The distance between the mouse and the actual launcher icon
  const distance = useTransform(mouseX, (val: any) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    const pos = val - bounds.x - bounds.width * 0.5;

    return pos;
  });

  // The width of the icon when the mouse hovers over
  const widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  const width = useSpring(widthSync, {
    damping: 20,
    mass: 0.5,
    stiffness: 200,
  });

  return (
    <motion.li
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full"
    >
      {component}
    </motion.li>
  );
};

export default Launcher;
