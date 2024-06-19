import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

interface Props {
  menu: Option[];
}

const MobileMenu = ({ menu }: Props) => {
  // STATES
  // Control the state of the mobile menu
  const [open, setOpen] = useState(false);

  return (
    <button
      className="w-fit h-fit flex items-center cursor-pointer relative"
      onClick={() => setOpen((prev) => !prev)}
    >
      <CiMenuBurger size={25} />

      {/* Menu */}
      {open && <div className="absolute">hello</div>}
    </button>
  );
};

export default MobileMenu;
