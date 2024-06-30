import WindowBorder from "@/components/desktop/Window";
import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png";
import ur from "@/assets/icons/ultimate_reality_icon.png";

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

  return (
    <WindowBorder title="Projects">
      <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center md:justify-normal">
        {projects.map((project, index) => (
          <Icon key={index} name={project.name} image={project.image} info={project.info} />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
