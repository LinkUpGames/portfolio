import { markdownComponents } from "@/helpers/opts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ExperienceMarkdownProps {
  file: string;
}

const ExperienceMarkdown = ({ file }: ExperienceMarkdownProps) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={markdownComponents}
      children={file}
      skipHtml
    />
  );
};

export default ExperienceMarkdown;
