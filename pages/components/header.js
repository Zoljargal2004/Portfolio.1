import Link from "next/link";
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const com_styles = [
  { name: "--bg-color", dark: "#030712", light: "#FFFFFF" },
  { name: "--head-color", dark: "#F9FAFB", light: "#111827" },
  { name: "--text-color", dark: "#D1D5DB", light: "#4B5563" },
  { name: "--text-on-button", dark: "#111827", light: "#F9FAFB" },
  { name: "--line-bg", dark: "#1F2937", light: "#F3F4F6" },
  { name: "--portrait-bg", dark: "#374151", light: "#E5E7EB" },
  { name: "--sec-bg-color", dark: "#111827", light: "#F9FAFB" },
];

const nav_bar = [{ name: "About", link: "/About" }];

let dark = true;

export function Header() {
  let logo = "<SS/>";
  let [open, setOpen] = useState(true);

  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="flex justify-center content-center bg-[--bg-color] lg:px-[80px] lg:py-4 w-[100%] p-4">
      <div className="flex justify-between lg:px-8 items-center w-[100%] max-w-[1280px]">
        <span className="text-3xl text-bold text-[--head-color]">{logo}</span>
        <div className=" hidden gap-6 items-center lg:flex">
          <Link href={"/experience"}>About</Link>
          <Link href={"#"}>Work</Link>
          <Link href={"#"}>Testimonials</Link>
          <Link href={"#"}>Contact</Link>
          <div className="w-[1px] bg-[--line-bg] h-6"></div>
          <div onClick={changeMod}>
            <IoMoonOutline size={20} />
          </div>
          <button className="text-[--text-on-button] bg-[--head-color] px-4 py-[6px] rounded-[12px]">
            Download CV
          </button>
        </div>
        <div onClick={openMenu}>
          <GiHamburgerMenu size={24} className="lg:hidden" />
        </div>
      </div>
      <div>
        <div
            className={`fixed transition-all inset-0   ${open ? "z-[9] opacity-100" : "-z-10 opacity-0"}`}
            onClick={closeMenu}
          ></div>
        <div
          className={`top-0 right-0 bottom-0 transition-all duration-1000 fixed bg-[--bg-color] z-10 ease-in-out ${
            open ? "left-0" : "left-full"
          }`}
        >
          <div className="flex justify-between p-4 items-center">
            <span className="text-2xl text-bold text-[--head-color]">
              {logo}
            </span>
            <div className="content-center" onClick={closeMenu}>
              <RxCross2 size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function changeMod() {
  const styles = document.documentElement.style;
  for (let i = 0; i < com_styles.length; i++) {
    styles.setProperty(
      com_styles[i].name,
      dark ? com_styles[i].light : com_styles[i].dark
    );
  }
  dark ? (dark = false) : (dark = true);
}
