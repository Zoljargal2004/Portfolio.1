import Image from "next/image";
export function Hero() {
  return (
    <div className="bg-[--bg-color] py-16 px-4">
      <div className="flex flex-col items-center">
        <Portrait size="" portrait="first"/>
      </div>
    </div>
  );
}

export function Portrait(props) {
    return <div className="pt-5 flex justify-center">
        
        <div className="border-[8px] border-transparent bg-[--portrait-bg] w-[280px] h-[280px] bottom-0 relative">
            <Image width={240} height={280} src="/Images/Pic.png" className="absolute bottom-5 left-3"/>
        </div>
    </div>
}
