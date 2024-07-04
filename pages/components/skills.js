import { Topic } from "./About";
import Image from "next/image";
const skills_lis = [
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Nest.js" },
  { name: "Socket.io" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Sass/Scss" },
  { name: "Tailwindcss" },
  { name: "Figma" },
  { name: "Cypress" },
  { name: "Storybook" },
  { name: "Git" },
];

export function Skills() {
  return (
    <div className="bg-[--bg-color] px-4 py-16">
      <div className="flex flex-col gap-4 items-center">
        <Topic title="Skills" />
        <span className="mb-2 text-[18px]">
          The skills, tools and technologies I am really good at:
        </span>
        <Skill_set/>
      </div>
    </div>
  );
}
function Skill_set(){
    return <div className="grid grid-cols-3 justify-between w-[100%] max-w-[1220px] gap-y-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
    {skills_lis.map((skill) => {
      let scource = "/Images/Skills/icon-" + skill.name.toLowerCase() + ".svg"
      for (let i = 0; i < skill.name.length; i++){
          if (skill.name[i] == '.' || skill.name[i] == '/'){
          scource = "/Images/Skills/icon-" + skill.name.slice(0,i).toLowerCase() + ".svg"
          }
      }
      return (
        <div className="text-center flex flex-col items-center">
          <div className="flex justify-center items-center h-16 w-16">
            <img  className="object-contain"
              
              src={
                scource
              }
            />
          </div>
          <span>{skill.name}</span>
        </div>
      );
    })}
  </div>
}