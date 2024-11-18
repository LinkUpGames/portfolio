import SkillIcon from "./SkillIcon";

/**
 * Props
 */
interface Props {
  /**
   * Array of skills to display
   */
  skills: { name: string; image: string; level: number }[];

  /**
   * Showcase what skills we are going to display here
   */
  title: string;
}

/**
 * Section skill based on similar ideas
 * For example, languages should be seperate from tools
 */
const SkillSection = ({ skills, title }: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h2 className="text-xl text-red">{title}</h2>

      <div className="p-4 w-full rounded-lg border-2 border-dark flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 h-full flex-shrink-0 overflow-y-auto bg-dark-status">
        {skills.map((skill, index) => (
          <SkillIcon key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
