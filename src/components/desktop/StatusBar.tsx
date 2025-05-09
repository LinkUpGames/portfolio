import { useLocation } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useContext, useEffect } from "react";
import { AppContext } from "@/AppContext";
import TimeWidget from "./Widget/TimeWidget";

const StatusBar = () => {
  const { setMenuItem } = useContext(AppContext);

  const menu: Option[] = [
    {
      name: "Home",
    },
    {
      name: "Experience",
    },
    {
      name: "Projects",
    },
    {
      name: "Skills",
    },
  ];

  const options: Option[] = [
    {
      name: "#ff0000",
      component: <TimeWidget key={"time"} />,
    },
    {
      name: "#fcf00a",
      component: <div key={"bruh"} />,
    },
    {
      name: "#34fc08",
      component: <div key={"ro"} />,
    },
  ];

  // React Router
  const location = useLocation();
  const { pathname } = location;

  // EFFECTS
  /**
   * Update the menu index for the correct position of where the website is
   */
  useEffect(() => {
    // Check what option is currently selected
    menu.forEach((element, i) => {
      const index = pathname.includes(element.name);

      // String exists, therefore update it
      if (index) {
        setMenuItem(i);
      }
    });
  }, []);

  return (
    <div
      className={`z-1000 w-full flex items-center rounded-t-md justify-between h-fit px-4 py-2 bg-dark-status border-b-black border-b-2 select-none`}
    >
      {/* Mobile Version */}
      <div className="md:hidden cursor-pointer">
        <MobileMenu menu={menu} />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex">
        <DesktopMenu menu={menu} />
      </div>

      {/* Widgets */}
      <div className="flex flex-row">
        {options.map((option) => option.component)}
      </div>
    </div>
  );
};

export default StatusBar;
