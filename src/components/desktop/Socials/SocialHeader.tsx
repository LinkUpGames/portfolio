import { IoCloseCircleSharp } from "react-icons/io5";
import { SocialContext } from "./SocialContext";
import { useContext } from "react";

const SocialHeader = () => {
  const { closeWidget } = useContext(SocialContext);

  return (
    <div className="flex flex-col justify-center items-center gap-6 mb-10 relative">
      {/* Exit Icon */}
      <button onClick={closeWidget} className="absolute right-0 top-0">
        <IoCloseCircleSharp size={30} color="#FFFFFF" />
      </button>

      <h2 className="text-white text-center text-4xl border-b-2 border-blue w-full">
        Socials
      </h2>

      <p className="text-gold text-base text-center">
        Let's Connect! Find me on any of the following platforms!
      </p>
    </div>
  );
};

export default SocialHeader;
