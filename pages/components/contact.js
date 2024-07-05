import { IoCopy } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Topic } from "./About";
import { IoIosCall } from "react-icons/io";
import { Social } from "./hero";

export function Contact() {
  let email = "reachsagarshah@gmail.com";
  let phone = "+91 8980500565";
  return (
    <div className="px-4 py-16 bg-[--bg-color]">
      <div className="flex flex-col items-center text-center gap-6">
        <Topic title="Get in touch" />
        <p className="mt-[-8px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div>
          <div className=" flex gap-3 justify-center">
            <IoIosMail size={24} />
            <span>reachsagarshah@gmail.com</span>
            <IoCopy size={24} />
          </div>
          <div className="flex justify-center gap-1">
            <IoIosCall size={24} />
            <span>{phone}</span>
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
