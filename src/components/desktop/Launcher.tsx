import chatIcon from "pixelarticons/svg/chat.svg";
import musicIcon from "pixelarticons/svg/music.svg";

const Launcher = () => {
  // The elements that are being shown at the button
  const elements: Option[] = [
    {
      name: "chat",
      component: <img className="h-full object-contain" src={chatIcon} />,
    },
    {
      name: "music",
      component: <img className="h-full object-contain" src={musicIcon} />,
    },
  ];

  return (
    <div className="fixed bottom-10 mt-auto mx-auto px-5 py-3 w-fit max-w-50 overflow-x-auto h-12 text-center backdrop-blur-sm bg-red bg-opacity-60 rounded-md">
      <div className="flex flex-row gap-4 h-full">
        {elements.map((elem) => (
          <div className="h-full cursor-pointer">{elem.component}</div>
        ))}
      </div>
    </div>
  );
};

export default Launcher;
