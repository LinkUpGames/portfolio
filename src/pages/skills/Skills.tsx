import WindowBorder from "@/components/desktop/Window"

import SkillHeader from "./SkillHeader";
import SkillIcon from "./SkillIcon";

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
      <SkillHeader />

      {/* Content */}
      <div className="w-full p-4">
        <div className="p-2 w-full border-2 border-dark flex flex-col justify-center items-center md:grid md:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </div>
      </div>
    </WindowBorder>
  )
}

export default Skills
