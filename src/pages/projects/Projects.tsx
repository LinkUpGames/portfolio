import WindowBorder from "@/components/desktop/Window";

import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png";
import ur from "@/assets/icons/ultimate_reality_icon.png";
import { useState } from "react";
import ProjectHeader from "./ProjectHeader";

import ADAICON1 from "@/assets/ada-1.jpeg";
import ADAICON2 from "@/assets/ada-2.jpeg";

const Projects = () => {
  const projects: {
    name: string;
    image: string;
    info: {
      title: string;
      summary: string;
      link: string;
      images: string[];
      widget: JSX.Element;
    };
  }[] = [
    {
      name: "Hacker.exe",
      image: hacker,
      info: {
        title: "Hacker.Exe - Hacking Simulator",
        summary: `This was my first ever game. Although this game had very mixed reviews, it taught me a lot about video games and how much effort and thought goes into making them. The creation of this game took roughly 3 months, during my sophomore summer break in high school.

          More About The Game:
          * The game is heavily inspired by point and click horror games

          * All of the graphics were made by me

          * The game was made using the GameMaker Studio 2 game engine

          This game also garnered around 100,000 downloads on the google play store before it got taken down due to deprecated api's.
        `,
        link: "https://www.linkupgames.com/hacker-exe-home-page",
        images: [
          "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-684721-52.jpg",
          "https://i.ytimg.com/vi/A0JYD-w-GFY/maxresdefault.jpg",
        ],
        widget: (
          <iframe
            src="https://widgets.gamejolt.com/package/v1?key=93u6qx5V"
            width="100%"
            height="245"
          ></iframe>
        ),
      },
    },
    {
      name: "UR.exe",
      image: ur,
      info: {
        title: "Ultimate Reality - A Pixelated Adventure",
        summary: `This game fueled my passion for indie games. I learned a lot about pixel art games with this game. This game is a platform beat'em up created in GameMaker Studio 2. Save the multiverse from an evil entity that threatens to control all that there is!

        More Info:
        * Game was inspired by a comic book character created when I was a kid
        * The soundtrack was outsourced and has many different genre's incorporated
        * The game takes inspiration from the combat style in Marvel's Spiderman

        This game became popular in GameJolt and was featured as a prominent game in their website. The game has also gotten picked up by VoxPop Games as a VoxPop game exclusive.
        `,
        link: "https://gamejolt.com/games/ultimatereality/406940",
        images: [
          "https://m.gjcdn.net/game-screenshot/600/2221985-t9b739jy-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2411152-jsk7cdgx-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2867848-rggcprjz-v4.webp",
        ],
        widget: (
          <iframe
            src="https://widgets.gamejolt.com/package/v1?key=YTpcvSoi"
            width="100%"
            height="245"
          ></iframe>
        ),
      },
    },
    {
      name: "term-calendar.exe",
      image:
        "https://static-00.iconduck.com/assets.00/terminal-icon-512x478-wh766b7f.png",
      info: {
        title: "Terminal Calendar - Built with Ada",
        summary: `A fully functional calendar with a custom ASCII font that displays the calendar year of the user's choosing!

        This program served as a proof-of-concept, developed for a class to explore diverse programming languages and their applications. 

        Learning different syntax styles, such as the one used in Ada, was both rewarding and practical. This experience allowed to broadened my understanding of different programming paradigms and their influence on various domains.
        `,
        link: "",
        images: [ADAICON1, ADAICON2],
        widget: <div />,
      },
    },
  ];

  // STATES
  const [iconTouch, setIconTouch] = useState<string>("");

  return (
    <WindowBorder title="Projects" className="flex flex-col gap-2">
      {/* Header */}
      <ProjectHeader iconName={iconTouch} />

      {/* Icons */}
      <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center md:justify-normal flex-1">
        {projects.map((project, index) => (
          <Icon
            onHover={() => setIconTouch(project.name)}
            key={index}
            name={project.name}
            image={project.image}
            info={project.info}
          />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
