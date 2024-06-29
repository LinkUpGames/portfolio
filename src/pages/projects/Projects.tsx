import WindowBorder from "@/components/desktop/Window";
import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png";
import ur from "@/assets/icons/ultimate_reality_icon.png";

const Projects = () => {
  const projects = [
    {
      name: "Hacker.exe",
      image: hacker,
    },
    {
      name: "Ultimate Reality",
      image: ur,
    },
  ];

  return (
    <WindowBorder title="Projects">
      <div className="w-full h-full flex flex-col md:flex-row flex-wrap gap-3 justify-center md:justify-normal">
        {projects.map((project) => (
          <Icon name={project.name} image={project.image} />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
