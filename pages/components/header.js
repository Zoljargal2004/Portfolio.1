import Link from "next/link";
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiLight } from "react-icons/ci";
import { Skill_set } from "./skills";

export const com_styles = [
  { name: "bg-color", dark: "#030712", light: "#FFFFFF" },
  { name: "head-color", dark: "#F9FAFB", light: "#111827" },
  { name: "--text-color", dark: "#D1D5DB", light: "#4B5563" },
  { name: "--text-on-button", dark: "#111827", light: "#F9FAFB" },
  { name: "line-bg", dark: "#1F2937", light: "#F3F4F6" },
  { name: "--portrait-bg", dark: "#374151", light: "#E5E7EB" },
  { name: "--sec-bg-color", dark: "#111827", light: "#F9FAFB" },
];

const logo = "<SS/>";

const nav_bar = [
  { name: "About", link: "/about" },
  { name: "Work", link: "/work" },
  { name: "Testimonials", link: "/experience" },
  { name: "Contact", link: "/contact" },
];

export function Header() {
  let [dark, isDark] = useState(true);
  let [open, setOpen] = useState(false);

  function modeHandler() {
    document.documentElement.classList.toggle("dark");
    Skill_set(dark);
    isDark(!dark);
  }
  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div
      className={`flex sticky top-0 z-40 justify-center content-center dark:bg-[#030712] bg-[#FFFFFF] lg:px-[80px] lg:py-4 w-[100%] p-4`}
    >
      <div className="flex justify-between lg:px-8 items-center w-[100%] max-w-[1280px]">
        <span
          className={`text-3xl text-bold dark:text-[#F9FAFB] text-[#111827]`}
        >
          {logo}
        </span>
        <div className=" hidden gap-6 items-center lg:flex">
          {nav_bar.map((bar) => {
            for (let i = 0; i < nav_bar.length; i++) {
              return <Link href={bar.link} className="text-[#4B5563] dark:text-[#D1D5DB]">{bar.name}</Link>;
            }
          })}
          <div
            className={`w-[1px] dark:bg-[#1F2937] bg-[#F3F4F6] h-6`}
          ></div>
          <div onClick={modeHandler} className="text-[#4B5563] dark:text-[#D1D5DB]" id="page_mode ">
            {dark ? <IoMoonOutline size={20} /> : <CiLight size={20} />}
          </div>
          <button
            className={`dark:text-[#111827] text-[#F9FAFB] dark:bg-[#F9FAFB] bg-[#111827] px-4 py-[6px] rounded-[12px]`}
          >
            Download CV
          </button>
        </div>
        <div onClick={openMenu} className="lg:hidden">
          <GiHamburgerMenu size={24} className="lg:hidden dark:text-[#D1D5DB] text-[#4B5563]" />
        </div>
      </div>

      
      {/* Mobile sidebar */}
      <div className="lg:hidden text-[#4B5563] dark:text-[#D1D5DB]">
        <div
          className={`fixed transition-all inset-0   ${
            open ? "z-[9] opacity-100" : "-z-10 opacity-0"
          }`}
          onClick={closeMenu}
        ></div>
        <div
          className={`top-0 right-0 bottom-0 transition-all duration-1000 fixed dark:bg-[${
            com_styles[0].dark
          }] bg-[#FFFFFF] dark:bg-[#030712] z-10 ease-in-out ${
            open ? "left-0" : "left-full"
          }`}
        >
          <div className="flex justify-between p-4 items-center">
            <span
              className={`text-2xl text-bold dark:text-[#D1D5DB] text-[#4B5563]`}
            >
              {logo}
            </span>
            <div className="content-center" onClick={closeMenu}>
              <RxCross2 size={24} />
            </div>
          </div>
          <div
            className={`border-y-[1px] dark:border-[#1F2937] border-[#F3F4F6] flex flex-col gap-4 p-4`}
          >
            {nav_bar.map((bar) => (
              <Link className="bold" href={bar.link}>
                {bar.name}
              </Link>
            ))}
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between" onClick={modeHandler}>
              <span>Switch Theme</span>
              {dark ? <IoMoonOutline size={20} /> : <CiLight size={20} />}
            </div>
            <div className="w-full flex justify-center">
              <button
                className={` px-4 py-[6px] rounded-xl text-[#F9FAFB] dark:text-[#111827] dark:bg-[#F9FAFB] bg-[#111827] w-[320px] max-h-9 ${open? "ml-0": "ml-40"}`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
