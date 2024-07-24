//hero.js

import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuFigma } from "react-icons/lu";
import { com_styles } from "./header";

export function Hero() {
  return (
    <div className={` dark:bg-[#030712] bg-[#FFFFFF] py-16 px-4 lg:px-20 lg:py-24 lg:flex lg:justify-center`}>
      <div className="flex flex-col items-center gap-12 max-w-7xl lg:flex-row-reverse lg:px-8">
        <Portrait portrait="first" />
        <Hero_Paragraph />
      </div>
    </div>
  );
}

export function Portrait(props) {
  return (
    <div className="pt-5 lg:pt-6">
      <div className="pt-5 flex justify-center lg:justify-start">
        <div
          className={
            `border-[8px] dark:bg-[#374151] bg-[#E5E7EB] ` +
            (props.number == 2
              ? `dark:border-[#374151] border-[#E5E7EB] w-[320px] lg:w-[400px] h-[360px] lg:h-[480px] `
              : `dark:border-[#030712] border-[#FFFFFF] w-[280px] lg:w-[280px] h-[280px] lg:h-[320px] `) +
            " bottom-0 relative"
          }
        >
          <img
            alt="Portrait"
            src={props.number == 2 ? "/Images/Pic2.png" : "/Images/Pic.png"}
            className={
              (props.number == 2
                ? `w-[280px] lg:w-[400px] h-[360px] lg:h-[480px] lg:left-10 dark:border-[#111827] border-[#F9FAFB]`
                : `w-[240px] lg:w-[280px] h-[280px] lg:h-[320px] lg:left-[-40px] dark:border-[#030712] border-[#FFFFFF] `) +
              " absolute bottom-3 left-3  lg:bottom-10 border-[8px]"
            }
          />
        </div>
      </div>
    </div>
  );
}

function Hero_Paragraph() {
  return (
    <div className="flex flex-col gap-12 text-[#4B5563] dark:text-[#D1D5DB]">
      <h1 className={`mb-[-40px] dark:text-[#F9FAFB] text-[#111827] text-4xl text-bold lg:text-6xl `}>
        Hi, I’m Sagar 👋
      </h1>
      <p className="">
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
      <Status />
      <Social />
    </div>
  );
}
function Status() {
  let available = true;
  let location = "Ahmedabad, India";

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-2 items-center">
        <IoLocationOutline size={24} />
        <span>{location}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 flex justify-center items-center">
          <div
            className={
              available
                ? `w-2 h-2 rounded-[50%] bg-green-700`
                : "w-2 h-2 bg-red-700 rounded-[50%]"
            }
          ></div>
        </div>
        <span>
          {available
            ? "Available for new projects"
            : "Not available for new projects"}
        </span>
      </div>
    </div>
  );
}
export function Social() {
  let size = 24;
  return (
    <div className="flex gap-2">
      <div>
        <LuGithub size={size} />
      </div>
      <div>
        <LuTwitter size={size} />
      </div>
      <div>
        <LuFigma size={size} />
      </div>
    </div>
  );
}
