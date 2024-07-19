import { FaCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <div className=" bg-[#F9FAFB] dark:bg-[#111827] py-6 text-[#4B5563] dark:text-[#D1D5DB]">
      <div className="flex gap-2 justify-center">
        <FaCopyright size={24} />
        <span>
          2023 | <a href="#">Designed</a> and <a href="#">coded</a> with ❤️️ by Sagar Shah
        </span>
      </div>
    </div>
  );
}
