interface Props {
  menu: Option[];
}

const DesktopMenu = ({ menu }: Props) => {
  return (
    <div className="flex flex-row w-full gap-4">
      {menu.map((element) => (
        <h2 className="text-black text-base">{element.name}</h2>
      ))}
    </div>
  );
};

export default DesktopMenu;
