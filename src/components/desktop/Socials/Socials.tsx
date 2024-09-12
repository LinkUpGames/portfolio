import { AppContext } from "@/AppContext";
import { useContext } from "react";
import SocialHeader from "./SocialHeader";
import SocialContent from "./SocialContent";
import SocialFooter from "./SocialFooter";
import { SocialContext } from "./SocialContext";

/**
 * Showcase the socials where people can contact me
 */
const Socials = () => {
  const { changePopup } = useContext(AppContext);

  // FUNCTIONS
  /**
   * Close the widget by assigning a null to the popup currently opened
   */
  const closeWidget = () => {
    changePopup(null);
  };

  return (
    <SocialContext.Provider
      value={{
        closeWidget: closeWidget,
      }}
    >
      <div className="rounded-lg bg-dark-status border-red border-2 p-4 w-full max-h-full overflow-y-auto backdrop-blur-md bg-opacity-85">
        <SocialHeader />

        <SocialContent />

        <SocialFooter />
      </div>
    </SocialContext.Provider>
  );
};

export default Socials;
