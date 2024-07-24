import { Topic } from "./about";
import Image from "next/image";
import { com_styles } from "./header";
import { useState } from "react";
const skills_lis = [
  { name: "Javascript", path: "/icon-javascript" },
  { name: "Typescript", path: "/icon-typescript" },
  { name: "React", path: "/icon-react" },
  { name: "Next.js", path: "/icon-next" },
  { name: "Node.js", path: "/icon-node" },
  { name: "Express.js", path: "/icon-express" },
  { name: "Nest.js", path: "/icon-next" },
  { name: "Socket.io", path: "/icon-socket" },
  { name: "PostgreSQL", path: "/icon-postgresql" },
  { name: "MongoDB", path: "/icon-mongodb" },
  { name: "Sass/Scss", path: "/icon-sass" },
  { name: "Tailwindcss", path: "/icon-tailwindcss" },
  { name: "Figma", path: "/icon-figma" },
  { name: "Cypress", path: "/icon-cypress" },
  { name: "Storybook", path: "/icon-storybook" },
  { name: "Git", path: "/icon-git" },
];

export function Skills() {
  return (
    <div className={`bg-[#FFFFFF] dark:bg-[#030712] px-4 py-16 text-[#4B5563] dark:text-[#D1D5DB]` }>
      <div className="flex flex-col gap-4 items-center max-w-7xl lg:m-auto">
        <Topic title="Skills" />
        <span className="text-[18px] mb-8">
          The skills, tools and technologies I am really good at:
        </span>
        <Skill_set />
      </div>
    </div>
  );
}
export function Skill_set(dark_mode) {

  
  return (
    <div className="grid grid-cols-3 justify-between w-[100%] max-w-[1220px] gap-y-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
      {skills_lis.map((skill) => {
        
        return (
          <div
            key={"skill_" + skills_lis.indexOf(skill)}
            className="text-center flex flex-col items-center"
          >
            <div className="flex justify-center items-center h-16 w-16">
              <img className="object-contain dark:fill-slate-100" src={`Images/Skills/${skill.path}.svg`} />
            </div>
            <span className="text-[#4B5563] dark:text-[#D1D5DB]" >{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}
