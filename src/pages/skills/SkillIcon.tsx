interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* The name and the image for the skill */}
      <div className="flex flex-row gap-1 justify-start items-center w-full">
        <img src={image} className="h-12 w-12 object-contain" />
        <h2 className="text-black text-lg md:text-xl text-left text-wrap">
          {name}
        </h2>
      </div>

      {/* Progress for Skill */}
      <div className="w-full">
        <div className="w-full border-2 bg-red" />
      </div>
    </div>
  )
}

export default SkillIcon
