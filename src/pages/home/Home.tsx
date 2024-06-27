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

        {/* Intro */}
        <div className="mt-2">
          <h5 className="text-dark uppercase font-bold">Ecclesiastes 9:10.</h5>

          <p className="text-base md:text-lg">
            Hey! I am a software developer from &nbsp;
            <Link
              to="https://www.lonelyplanet.com/articles/top-things-to-do-in-ecuador"
              target="_blank"
              className="underline"
            >
              Ecuador
            </Link>
            &nbsp;living in Canada. As an avid enjoyer of video games. I'm a big
            tech enthusiast with a love for gaming, coding adventures and
            staying active. Here's a glimpse into what makes me tick!
          </p>
        </div>

        {/* Gaming and Creativity */}
        <div className="mt-2">
          <h5 className="text-base md:text-lg text-dark font-bold">
            Fueling Creativity Through Gaming
          </h5>

          <p className="text-base md:text-lg">
            When I'm bored you will probably find me playing&nbsp;
            <Link
              to="https://www.ea.com/games/apex-legends?setLocale=en-us?setLocale=en-us"
              target="_blank"
              className="underline"
            >
              Apex Legends
            </Link>
            ,&nbsp; grinding out ranked or bringing my ideas to life with my
            most <span className="underline">used game engines</span>. Over the
            years, I have crafted my ideas to life, some of which include&nbsp;
            <Link
              to="https://gamejolt.com/games/ultimatereality/406940"
              target="_blank"
              className="underline"
            >
              Ultimate Reality
            </Link>
            ; &nbsp; which turned out to be a hit! I enjoy blending my
            creativity with code to create immersive experienes that gamers
            love.
          </p>
        </div>

        {/* Tech and Web Development */}
        <div className="mt-2">
          <h5 className="text-base md:text-lg text-dark font-bold">
            Tech and Web Development
          </h5>

          <p className="text-base md:text-lg">
            When I'm not gaming, I'm tinkering with tech. I don't want to sound
            like a broken record, but I swear by Neovim and the increased
            productivity it offers. <br />
            My daily driver is Fedora. I enjoy using Fedora because of the
            stability it offers while also including the latest packages. It's
            no Arch distro, but it's a really good distro!
            <br />I am curently working as a full stack software engineer
            at&nbsp;
            <Link
              to="https://fillitforward.com/about/"
              target="_blank"
              className="underline text-green"
            >
              Fill it Forward
            </Link>
            &nbsp;. I enjoy combining sleek design with powerful APIs that work
            flawlessly.
          </p>
        </div>
      </WindowBorder>
    </>
  );
};

export default Home;
