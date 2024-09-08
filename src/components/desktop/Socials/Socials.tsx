import { AppContext } from "@/AppContext";
import { useContext } from "react";
import SocialHeader from "./SocialHeader";
import SocialContent from "./SocialContent";
import SocialFooter from "./SocialFooter";

/**
 * Showcase the socials where people can contact me
 */
const Socials = () => {
  const { changePopup } = useContext(AppContext);

  return (
    <div className="rounded-lg bg-dark-status border-red border-2 p-4 w-full max-h-full">
      <SocialHeader />

      <SocialContent />

      <SocialFooter />
    </div>
  );
};

export default Socials;
