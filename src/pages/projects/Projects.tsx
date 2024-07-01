import WindowBorder from "@/components/desktop/Window";

import cardIcon from "pixelarticons/svg/card-text.svg";
import alertIcon from "pixelarticons/svg/alert.svg";

import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png";
import ur from "@/assets/icons/ultimate_reality_icon.png";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Hacker.exe",
      image: hacker,
      info: {
        title: "Hacker.Exe - Hacking Simulator",
        summary: "Hacker.exe is a 2d something bruh",
        link: "https://www.linkupgames.com/hacker-exe-home-page",
        images: ["https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-684721-52.jpg", "https://i.ytimg.com/vi/A0JYD-w-GFY/maxresdefault.jpg"],
        widget: <iframe src="https://widgets.gamejolt.com/package/v1?key=93u6qx5V" height="245"></iframe>
      },
    },
    {
      name: "UR.exe",
      image: ur,
      info: {
        title: "Ultimate Reality - A Pixelated Adventure",
        summary:
          "This is my best game to date. The game was made using GameMaker Studio 2. All the assets, including music, was outsourced.",
        link: "https://gamejolt.com/games/ultimatereality/406940",
        images: [
          "https://m.gjcdn.net/game-screenshot/600/2221985-t9b739jy-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2411152-jsk7cdgx-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2867848-rggcprjz-v4.webp",
        ],
        widget: <iframe src="https://widgets.gamejolt.com/package/v1?key=YTpcvSoi" height="245"></iframe>
      },
    },
  ];

  // STATES
  const [iconTouch, setIconTouch] = useState<string>("");

  return (
    <WindowBorder title="Projects" className="flex flex-col gap-2">
      {/* Header */}
      <div className="border-4 rounded-md border-dark h-12 flex justify-between items-center flex-row gap-4 p-1">
        <img src={alertIcon} className="h-full w-auto" />

        {/* Input Bar */}
        <h2 className="w-full bg-black text-center text-white text-xl md:text-3xl h-full flex justify-center items-center">
          {iconTouch ? iconTouch : "..."}
        </h2>

        <img src={cardIcon} className="h-full w-auto" />
      </div>


      {/* Icons */}
      <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center md:justify-normal">
        {projects.map((project, index) => (
          <Icon onHover={() => setIconTouch(project.name)} key={index} name={project.name} image={project.image} info={project.info} />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
