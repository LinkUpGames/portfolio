import { CiMenuBurger } from "react-icons/ci";

interface Props {
  menu: Option[];
}

const MobileMenu = ({ menu }: Props) => {
  return (
    <div>
      <CiMenuBurger />
    </div>
  );
};

export default MobileMenu;
