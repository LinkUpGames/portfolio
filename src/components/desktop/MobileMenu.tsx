import { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { AppContext } from "@/AppContext";

interface Props {
  menu: Option[];
}

const MobileMenu = ({ menu }: Props) => {
  // Context
  const { menu: menuItem, setMenuItem } = useContext(AppContext);

  // STATES
  const [open, setOpen] = useState(false);

  // FUNCTIONS
  /**
   * Handle the click of one of the options
   * @param num the menu number that we are changing to
   */
  const handleClick = (num: number) => {
    setOpen((prev) => !prev);
    setMenuItem(num);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Button */}
      <DropdownMenuTrigger>
        <CiMenuBurger size={25} color="#FFFFFF" />
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent className="z-9999 ml-3 bg-dark-status">
        {menu.map((element, index) => (
          <DropdownMenuItem key={index} onClick={() => handleClick(index)}>
            <Link
              key={index}
              to={element.name}
              className={`${index === menuItem ? "text-black bg-grey px-2" : "bg-transparent text-white"} text-xl rounded-lg`}
            >
              {element.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
