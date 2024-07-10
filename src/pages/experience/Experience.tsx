import WindowBorder from "@/components/desktop/Window";
import ExperienceHeader from "./ExperienceHeader";
import { ExperienceContext } from "./ExperienceContext";
import { useState } from "react";

const DEFAULT_FILESYSTEM_STATE: Directory = {
  name: "Experience",
  files: [
    {
      name: "Intro.exe",
      content: <>bruh</>,
    },
  ],
  open: true,
  directories: [
    // Fill it Forward
    {
      name: "Fill it Forward",
      open: false,
      files: [],
      directories: [
        {
          name: "Projects",
          open: false,
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

export const Experience = () => {
  // FILE SYSTEM
  const [filesystem, setFilesystem] = useState(DEFAULT_FILESYSTEM_STATE);

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

  // FUNCTIONS
  /**
   * The content to display on the side
   */
  const showContent = (element: JSX.Element) => {
    setContent(element);
  };

  /**
   * Update the directory state by showing it and not hiding it
   * @param dirName The directory to update
   * @param value The value for the directory
   */
  const updateDirectoryState = (dirName: string, value: boolean) => {
    // TODO: Continue here
    console.log("YEP");
  };

  return (
    <ExperienceContext.Provider
      value={{
        showContent: showContent,
        updateDirectoryState: updateDirectoryState,
        filesystem: filesystem,
      }}
    >
      <WindowBorder
        title="Experience"
        className="!p-0 flex flex-row h-full w-full"
      >
        <div>
          <ExperienceHeader />
        </div>

        <div className="flex-grow">{content}</div>
      </WindowBorder>
    </ExperienceContext.Provider>
  );
};
