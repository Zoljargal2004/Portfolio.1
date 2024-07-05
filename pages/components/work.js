import { Topic } from "./About";
import Image from "next/image";
import { CiShare1 } from "react-icons/ci";


const work_lis = [
  {
    page_img: "Fiskil_Preview.svg",
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },

  {
    page_img: "Fiskil_Preview.svg",
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },

  {
    page_img: "Fiskil_Preview.svg",
    name: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  }
  
];

export function Work() {
  return (
    <div className="bg-[--bg-color] px-4 py-16">
      <div className="flex flex-col gap-4 items-center">
        <Topic title="Work" />
        <span className="mt-[-8px] text-lg text-center">
          Some of the noteworthy projects I have built:
        </span>
        <Work_Projs />
      </div>
    </div>
  );
}

function Work_Projs() {
  return (
    <div className="flex flex-col gap-6">
      {work_lis.map((project) => {
        return (
          <div key={"project"+work_lis.indexOf(project)} className="flex flex-col rounded-xl overflow-hidden ">
            <div className="p-8 bg-[--portrait-bg]">
              <div className="w-[100%] h-[100%]">
                <img
                  className="object-contain"
                  src={"/Images/Project_Preview/" + project.page_img}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-[--line-bg] ">
              <span className="text-lg text-[--head-color] font-bold">{project.name}</span>
              <p>
                {project.description}
              </p>
                <div className="flex gap-2 gap-y-2 flex-wrap">
                    {project.tags.map((tag) =>{
                        return <Topic key={"tag"+work_lis.indexOf.project +project.tags.indexOf(tag)} title = {tag}/>
                    })}
                </div>
                <CiShare1 size={24}/>

            </div>
          </div>
        );
      })}
    </div>
  );
}
