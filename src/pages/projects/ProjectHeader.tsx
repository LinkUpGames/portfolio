import cardIcon from "pixelarticons/svg/card-text.svg";
import alertIcon from "pixelarticons/svg/alert.svg";

interface Props {
  iconName: string;
}

const ProjectHeader = ({ iconName }: Props) => {
  return (
    <div className="w-full border-4 rounded-md border-dark h-12 flex justify-between items-center flex-row gap-4 p-1">
      <img src={alertIcon} className="h-full w-auto" />

      {/* Input Bar */}
      <h2 className="w-full bg-black text-center text-white text-xl md:text-3xl h-full whitespace-nowrap text-ellipsis overflow-x-hidden">
        {iconName ? iconName : "..."}
      </h2>

      <img src={cardIcon} className="h-full w-auto" />
    </div>
  );
};

export default ProjectHeader;
