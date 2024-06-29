import WindowBorder from "@/components/desktop/Window";
import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png"

const Projects = () => {
  const projects = [
    {
      name: "Hacker.exe",
      image: hacker,
    },
    {
      name: "Ultimate Reality",
      image: "",
    },
  ];

  return (
    <WindowBorder title="Projects">
      <div className="w-full h-full flex flex-row flex-wrap gap-3">
        {projects.map((project) => (
          <Icon name={project.name} image={project.image} />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
