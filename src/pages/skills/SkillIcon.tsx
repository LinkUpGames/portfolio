interface Props {
  name: string;
  level: number;
  image: string;
}

const SkillIcon = ({ name, level, image }: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-black text-lg md:text-xl text-center">
        {name}
      </h2>
    </div>
  )
}

export default SkillIcon
