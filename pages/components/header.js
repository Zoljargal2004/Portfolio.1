import Link from "next/link";
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";

export function Header() {
  let logo = "<SS/>";
  return (
    <div className="flex justify-center content-center lg:px-[80px] lg:py-4 w-[100%] p-4">
      <div className="flex justify-between lg:px-8 items-center w-[100%] max-w-[1280px]">
        <span className="text-3xl text-bold">{logo}</span>
        <div className=" hidden gap-6 items-center lg:flex">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Work</Link>
          <Link href={"#"}>Testimonials</Link>
          <Link href={"#"}>Contact</Link>
          <div className="w-[1px] bg-[--line-bg] h-6"></div>
          <IoMoonOutline size={20} />
          <button className="text-[--text-on-button] bg-[--head-color] px-4 py-[6px] rounded-[12px]">
            Download CV
          </button>
        </div>
        <GiHamburgerMenu size={24} className="lg:hidden"/>
      </div>
    </div>
  );
}
