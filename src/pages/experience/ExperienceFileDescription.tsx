import fileIcon from "pixelarticons/svg/file.svg";

interface Props {
  file: SysFile;
}

const ExperienceFileDescription = ({ file }: Props) => {
  const name = file.name;
  return (
    <div className="flex flex-row text-left justify-start items-center w-full gap-2 text-black">
      {/* Logo */}
      <img src={fileIcon} className="w-6 h-6 object-contain" alt="File Logo" />

      {/* Name */}
      <h2>{name}</h2>
    </div>
  );
};

export default ExperienceFileDescription;
