import { IoCopy } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Topic } from "./components/about";
import { IoIosCall } from "react-icons/io";
import { Social } from "./hero";

export function Contact() {
  let email = "reachsagarshah@gmail.com";
  let phone = "+91 8980500565";
  return (
    <div className="px-4 py-16 bg-[--bg-color]">
      <div className="flex flex-col items-center text-center gap-6">
        <Topic title="Get in touch" />
        <p className="mt-[-8px] text-xl max-w-xl">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="text-lg flex flex-col lg:text-4xl lg:gap-[18px]">
          <div className=" flex gap-3 justify-center items-center">
            <IoIosMail size={24} />
            <span className="font-semibold">reachsagarshah@gmail.com</span>
            <IoCopy size={24} />
          </div>
          <div className="flex justify-center gap-1 items-center">
            <span className="font-semibold">{phone}</span>
            <IoCopy size={24} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <span>
            You may also find me on these platforms!
            </span>
            <div>
                <Social/>
            </div>
        </div>
      </div>
    </div>
  );
}
