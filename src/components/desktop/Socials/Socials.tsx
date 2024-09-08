import { AppContext } from "@/AppContext";
import { useContext } from "react";

/**
 * Showcase the socials where people can contact me
 */
const Socials = () => {
  const { changePopup } = useContext(AppContext);

  return <div>Socials</div>;
};

export default Socials;
