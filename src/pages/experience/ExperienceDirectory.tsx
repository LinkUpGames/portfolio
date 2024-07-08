import folderIcon from "pixelarticons/svg/folder.svg";

interface Props {
  directory: Directory;
}

const ExperienceDirectory = ({ directory }: Props) => {
  const name = directory.name;
  const files = directory.files;
  const childDirectories = directory.directories;

  return (
    <div className="w-full h-full px-4 py-2 border-l-2 border-l-black">
      {/* Logo and Directory name */}
      <div className="w-full p-2 flex gap-2 items-center text-black">
        <img src={folderIcon} className="w-6 h-6 object-fit" />

        <h2 className="text-base">{name}</h2>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col justify-start items-center">
        {/* Directories */}
        {childDirectories.map((dir) => (
          <ExperienceDirectory directory={dir} />
        ))}

        {/* Files */}
        {files.map((file) => file)}
      </div>
    </div>
  );
};

export default ExperienceDirectory;
