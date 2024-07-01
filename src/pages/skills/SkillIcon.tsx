interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  const percentage = +(level * 100).toFixed(2);

  return (
    <div className="w-full flex items-center justify-between">
      {/* The name and the image for the skill */}
      <div className="flex flex-row gap-1 justify-start items-center w-full">
        <img src={image} className="h-12 w-12 object-contain rounded-full" />
        <h2 className="text-black text-base md:text-xl text-left text-wrap">
          {name}
        </h2>
      </div>

      {/* Progress for Skill */}
      <div className="w-full">
        {/* Percentage */}
        <h3>{percentage}</h3>

        <div className="w-full border-dark border-2 h-6">
          <div
            className="w-full bg-green h-full"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
