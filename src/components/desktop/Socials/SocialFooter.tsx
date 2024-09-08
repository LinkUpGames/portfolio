import UR from "@/assets/ultimate-reality-dance.gif";
const SocialFooter = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <img src={UR} className="w-auto h-24" />
      <img src={UR} className="w-auto h-24 scale-x-[-1]" />
    </div>
  );
};

export default SocialFooter;
