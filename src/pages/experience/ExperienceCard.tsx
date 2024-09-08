import Markdown from "react-markdown";
import { markdownComponents } from "@/helpers/opts";
import rehypeRaw from "rehype-raw";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {/* Company Name */}
      <div className="w-full flex justify-center flex-col items-center md:flex-row md:justify-between md:items-center border-b-2 border-b-dark pb-2 md:pb-0 mb-4">
        <h1 className="text-3xl text-left text-red">{experience.company}</h1>

        <h2 className="text-base text-right text-dark">{experience.time}</h2>
      </div>

      {/* Description */}
      <div className="w-full flex flex-col">
        <h6 className="text-xl md:text-lg text-green">{experience.job}</h6>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
          children={experience.description}
          skipHtml
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
