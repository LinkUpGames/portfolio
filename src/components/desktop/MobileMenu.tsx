import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface Props {
  menu: Option[];
}

const MobileMenu = ({ menu }: Props) => {
  // STATES
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Button */}
      <DropdownMenuTrigger>
        <CiMenuBurger size={25} />
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent className="z-[9999] ml-3">
        {menu.map((element, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Link key={index} to={element.name} className="text-xl">
              {element.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
