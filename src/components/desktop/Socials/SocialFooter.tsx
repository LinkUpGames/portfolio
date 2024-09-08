import UR from "@/assets/ultimate-reality-dance.gif";
const SocialFooter = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <img src={UR} className="w-auto h-16 md:h-24" />

      <a
        href="mailto:cevallosenterprises@gmail.com"
        className="text-blue text-sm md:text-base underline text-center"
      >
        <span className="text-green">Email: </span>cevallosenterprises
        <span className="text-green">[at]</span>
        gmail<span className="text-green">[dot]</span>com
      </a>

      <img src={UR} className="w-auto h-16 md:h-24 scale-x-[-1]" />
    </div>
  );
};

export default SocialFooter;
