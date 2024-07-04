import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuFigma } from "react-icons/lu";

export function Hero() {
  return (
    <div className="bg-[--bg-color] py-16 px-4">
      <div className="flex flex-col items-center gap-12">
        <Portrait size="" portrait="first" />
        <Hero_Paragraph />
      </div>
    </div>
  );
}

export function Portrait(props) {
  return (
    <div className="pt-5 flex justify-center">
      <div className="border-[8px] border-transparent bg-[--portrait-bg] w-[280px] h-[280px] bottom-0 relative">
        <Image
          width={240}
          height={280}
          src="/Images/Pic.png"
          className="absolute bottom-5 left-3"
        />
      </div>
    </div>
  );
}

function Hero_Paragraph() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="mb-[-40px] text-[--head-color] text-4xl">Hi, I’m Sagar 👋</h1>
      <p>
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
                ? "w-2 h-2 rounded-[50%] bg-[--status-available]"
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
function Social() {
    let size = 24
  return (
    <div className="flex gap-2">
      <div>
        <LuGithub size={size}/>
      </div>
      <div>
        <LuTwitter size={size}/>
      </div>
      <div>
        <LuFigma size={size}/>
      </div>
    </div>
  );
}
