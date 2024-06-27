import WindowBorder from "@/components/desktop/Window";

const Projects = () => {
  const projects = [
    {
      name: "Hacker.exe",
      image: "",
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
          <div className="h-6">
            <h3> {project.name}</h3>
          </div>
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;
