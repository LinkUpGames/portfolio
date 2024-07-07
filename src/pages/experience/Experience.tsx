import WindowBorder from "@/components/desktop/Window";
import ExperienceHeader from "./ExperienceHeader";

export const Experience = () => {
  // EXPERIENCES
  const experiences = [
    {
      company: "Fill it Forward",
      job: "Junior Software Engineer",
      time: "May 2023 - Present",
      description:
        "Create, deploy and form full stack web applications that support our infrastructure and our services",
      img: "",
    },
    {
      company: "Other Ocean Interactive",
      job: "Programmer",
      time: "April 2022 - Sept 2022",
      description:
        "Video Game Engineer creating tooling for the Unity game dev framework",
      img: "",
    },
    {
      company: "LinkUp Games",
      job: "Video Game Developer",
      time: "February 2019 - Present",
      description:
        "Building video games using different game engines, including Game Maker Studio and Godot",
      img: "",
    },
  ];
  return (
    <WindowBorder title="Experience">
      <ExperienceHeader />
    </WindowBorder>
  );
};
