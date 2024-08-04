import { AppContext } from "@/AppContext";
import WindowBorder from "@/components/desktop/Window";
import { useContext } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import hometext from "@/text/home.md";
import { markdownComponents } from "@/helpers/opts";

const Home = () => {
  const { lang } = useContext(AppContext);

  return (
    <>
      <WindowBorder title={lang.home.title}>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
          children={hometext}
          skipHtml
        />
      </WindowBorder>
    </>
  );
};

export default Home;
