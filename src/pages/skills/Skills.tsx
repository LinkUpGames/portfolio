import WindowBorder from "@/components/desktop/Window"

import saveIcon from "pixelarticons/svg/save.svg";
import linkIcon from "pixelarticons/svg/link.svg";

const Skills = () => {
  // SKILLS
  const skills = [
    {
      name: "Javascript/Node",
      image: "",
      level: 0.8
    }, {
      name: "Java",
      image: "",
      level: 0.9,
    }, {
      name: "C",
      image: "",
      level: 0.8
    }, {
      name: "Godot",
      image: "",
      level: 0.7
    }, {
      name: "GameMaker Studio 2",
      image: "",
      level: 0.9,
    }, {
      name: "Unity Game Engine",
      image: "",
      level: 0.6
    }, {
      name: "Go Lang",
      image: "",
      level: 0.7
    }, {
      name: "Rust",
      image: "",
      level: 0.5
    }, {
      name: "AWS",
      image: "",
      level: 0.7
    }
  ]

  return (
    <WindowBorder title="Skills" className="!p-0">
      {/* Header */}
      <div className="bg-red w-full flex flex-col md:flex-row items-start md:items-center justify-between p-2 mb-4">
        {/* Icon With Skill stuff */}
        <div className="w-full h-full flex flex-row gap-2 items-center">
          <img src={saveIcon} className="h-12 w-auto" />

          <div className="flex flex-col text-black gap-0">
            <h2 className="text-lg md:text-3xl"> Skills</h2>
            <h4 className="text-base md:text-lg">The skills I have aquired over the years</h4>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full p-4">
        <div className="p-2 w-full border-2 border-dark grid grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="w-full flex items-center justify-between">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </WindowBorder>
  )
}

export default Skills
