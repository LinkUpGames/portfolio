import { AppContext } from "@/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  menu: Option[];
}

const DesktopMenu = ({ menu }: Props) => {
  const { menu: menuItem, setMenuItem } = useContext(AppContext);

  return (
    <div className="flex flex-row items-center w-full gap-4">
      {menu.map((element, index) => (
        <Link
          key={index}
          to={element.name}
          onClick={() => setMenuItem(index)}
          className={`${index === menuItem ? "text-black bg-grey px-2" : "text-white bg-transparent"} text-xl hover:text-red transition-all duration-300 rounded-lg`}
        >
          {element.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;
