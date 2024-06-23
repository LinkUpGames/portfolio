import chatIcon from "pixelarticons/svg/chat.svg";
import musicIcon from "pixelarticons/svg/music.svg";

const Launcher = () => {
  // The elements that are being shown at the button
  const elements: Option[] = [
    {
      name: "chat",
      component: <img className="" src={chatIcon} />,
    },
    {
      name: "music",
      component: <img className="" src={musicIcon} />,
    },
  ];

  return (
    <div className="fixed bottom-10 mt-auto">
      <ul className="backdrop-blur-sm bg-red bg-opacity-60 rounded-md mx-auto flex gap-4 h-16 items-end px-4 pb-3">
        {elements.map((elem, index) => (
          <li key={index} className="aspect-square w-10 rounded-full">
            {elem.component}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Launcher;
