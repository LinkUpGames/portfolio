import { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MusicPlayerContext } from "./MusicContext";

const MusicHeader = () => {
  // CONSTANTS
  const { closeWidget } = useContext(MusicPlayerContext);

  // FUNCTIONS
  const handleClick = () => {
    closeWidget();
  };

  return (
    <div className="bg-dark rounded-md text-white px-4 py-2 w-full sticky top-0 z-40">
      <h2 className="text-center mx-auto text-2xl">Music Player</h2>

      <button onClick={handleClick} className="absolute right-4 top-2">
        <IoCloseCircleSharp size={30} />
      </button>
    </div>
  );
};

export default MusicHeader;
