import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import chatIcon from "pixelarticons/svg/chat.svg";
import musicIcon from "pixelarticons/svg/music.svg";
import socialsIcon from "pixelarticons/svg/user.svg";
import githubIcon from "pixelarticons/svg/github.svg";

import { useContext, useRef } from "react";
import { AppContext } from "@/AppContext";
import Chat from "../Chat/Chat";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const Launcher = () => {
  // Framer Motion
  let mouseX = useMotionValue(Infinity);

  // The elements that are being shown at the button
  const elements: LauncherIcon[] = [
    {
      name: "chat",
      icon: <img draggable={false} className="h-full w-full" src={chatIcon} />,
      component: <Chat />,
    },
    {
      name: "music",
      icon: <img draggable={false} className="h-full w-full" src={musicIcon} />,
      component: <MusicPlayer />,
    },
    {
      name: "socials",
      icon: (
        <img draggable={false} className="h-full w-full" src={socialsIcon} />
      ),
      component: <div />,
    },
    {
      name: "github",
      icon: (
        <img draggable={false} className="h-full w-full" src={githubIcon} />
      ),
      component: <div />,
    },
  ];

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mt-auto md:fixed md:bottom-0 md:mb-5 flex justify-end"
    >
      <motion.ul className="backdrop-blur-sm bg-dark bg-opacity-60 rounded-md mx-auto flex gap-4 h-16 items-end px-4 pb-3">
        {elements.map((elem, index) => (
          <AppIcon key={index} element={elem} mouseX={mouseX} />
        ))}
      </motion.ul>
    </div>
  );
};
/**
 * The app icon that is used in the docker
 * The use of framer motion allows for smooth animations
 */
const AppIcon = ({ element, mouseX }: AppIconProps) => {
  // APP CONTEXT
  const { changePopup } = useContext(AppContext);

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

  // The Scale of the text
  const textScaleSync = useTransform(
    distance,
    [-50, -30, 0, 30, 50],
    [0, 1, 1, 1, 0],
  );
  const textScale = useSpring(textScaleSync, {
    damping: 10,
    mass: 0.2,
  });

  return (
    <motion.li
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 flex rounded-full items-center justify-center text-center relative select-none"
    >
      <motion.div
        style={{ scaleX: textScale, scaleY: textScale }}
        className="text-2xl text-white bg-red px-4 py-2 flex text-center justify-center items-center mx-auto rounded-lg absolute -top-[3.5rem]"
      >
        <motion.h2 style={{ scaleX: textScale, scaleY: textScale }}>
          {element.name.toUpperCase()}
        </motion.h2>
      </motion.div>

      <motion.div
        className="aspect-square cursor-pointer rounded-full w-full"
        whileTap={{ scale: 0.8 }}
        onTap={() => changePopup(element.component)}
      >
        {element.icon}
      </motion.div>
    </motion.li>
  );
};

export default Launcher;
