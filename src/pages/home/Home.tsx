import { AppContext } from "@/AppContext";
import WindowBorder from "@/components/desktop/Window";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { lang } = useContext(AppContext);

  return (
    <>
      <WindowBorder title={lang.home.title}>
        {/* Title */}
        <div className="flex flex-col justify-center items-start border-b-blue w-full border-b-2 gap-2">
          <h3 className="text-black text-2xl">{lang.home.title_card}</h3>
          <h4 className="text-black text-xl">{lang.home.introduction}</h4>
        </div>

        {/* Content */}

        <div className="mt-2">
          <h5 className="text-dark uppercase font-bold">Ecclesiastes 9:10.</h5>

          <p className="text-base md:text-lg">
            Hey! I am a software developer from &nbsp;
            <Link
              to="https://www.lonelyplanet.com/articles/top-things-to-do-in-ecuador"
              target="_blank"
            >
              Ecuador
            </Link>
            &nbsp;living in Canada. I enjoy learning everyday and exploring new
            indie games that are available outhere.
          </p>
        </div>
      </WindowBorder>
    </>
  );
};

export default Home;
