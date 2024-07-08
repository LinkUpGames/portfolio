import WindowBorder from "@/components/desktop/Window";
import ExperienceHeader from "./ExperienceHeader";
import { ExperienceContext } from "./ExperienceContext";
import ExperienceFile from "./ExperienceFile";
import { useEffect, useMemo, useState } from "react";

export const Experience = () => {
  // FILE SYSTEM
  const filesystem: Directory = {
    name: "Experience",
    files: [
      {
        name: "Intro.exe",
        content: <>bruh</>,
      },
    ],
    directories: [
      // Fill it Forward
      {
        name: "Fill it Forward",
        files: [],
        directories: [
          {
            name: "Projects",
            files: [
              {
                name: "Portal.iso",
                content: <></>,
              },
            ],
            directories: [],
          },
        ],
      },
    ],
  };

  // EXPERIENCES
  const experiences: Experience[] = [
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

  // STATES
  const [content, setContent] = useState<JSX.Element>(<> hello</>); // The content to be shown on the right hand of the directory tree

  return (
    <ExperienceContext.Provider
      value={{
        filesystem: filesystem,
      }}
    >
      <WindowBorder title="Experience" className="relative !p-0 flex flex-row">
        <ExperienceHeader />

        <div>{content}</div>
      </WindowBorder>
    </ExperienceContext.Provider>
  );
};
