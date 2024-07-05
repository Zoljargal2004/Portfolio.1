import { FaCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <div className=" bg-[--sec-bg-color] py-6">
      <div className="flex gap-2 justify-center">
        <FaCopyright size={24} />
        <span>
          2023 | <a href="#">Designed</a> and <a href="#">coded</a> with ❤️️ by Sagar Shah
        </span>
      </div>
    </div>
  );
}
