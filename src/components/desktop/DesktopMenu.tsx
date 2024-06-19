import { AppContext } from "@/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  menu: Option[];
}

const DesktopMenu = ({ menu }: Props) => {
  const { menu: menuItem } = useContext(AppContext);

  return (
    <div className="flex flex-row items-center w-full gap-4">
      {menu.map((element, index) => (
        <Link
          key={index}
          to={element.name}
          className={`${index === menuItem ? "text-white bg-black px-2" : "text-black bg-transparent"} text-xl`}
        >
          {element.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
