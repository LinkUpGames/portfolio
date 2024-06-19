import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { FaCircle } from "react-icons/fa";

const StatusBar = () => {
  const menu: Option[] = [
    {
      name: "Home",
    },
    {
      name: "Projects",
    },
    {
      name: "Socials",
    },
    {
      name: "Experience",
    },
  ];

  const options: Option[] = [
    {
      name: "#ff0000",
    },
    {
      name: "#fcf00a",
    },
    {
      name: "#34fc08",
    },
  ];

  return (
    <div
      className={`z-[9999] w-full flex items-center rounded-t-md justify-between h-3 px-4 py-4 bg-white border-b-black border-b-2`}
    >
      {/* Mobile Version */}
      <div className="md:hidden cursor-pointer">
        <MobileMenu menu={menu} />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex">
        <DesktopMenu menu={menu} />
      </div>

      {/* Window Leave */}
      <div className="flex flex-row gap-4">
        {options.map((option, index) => (
          <FaCircle key={index} color={option.name} />
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
