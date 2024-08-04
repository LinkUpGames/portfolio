import { AppContext } from "@/AppContext";
import WindowBorder from "@/components/desktop/Window";
import { useContext } from "react";
import Markdown from "react-markdown";
import hometext from "@/text/home.md";
import { Components } from "node_modules/react-markdown/lib";

const Home = () => {
  const { lang } = useContext(AppContext);

  // NOTE: https://github.com/remarkjs/react-markdown?tab=readme-ov-file#what-is-this
  const components: Partial<Components> = {
    h1(props) {
      const { node, ...rest } = props;

      return <h1 className="font-bold text-3xl text-red" {...rest} />;
    },
    h2(props) {
      const { node, ...rest } = props;

      return <h1 className="font-bold text-2xl text-blue" {...rest} />;
    },
  };
  return (
    <>
      <WindowBorder title={lang.home.title}>
        <Markdown components={components} children={hometext} skipHtml />
      </WindowBorder>
    </>
  );
};

export default Home;
