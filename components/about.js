
import { Portrait } from "./hero"
import React from "react"


export function About(){
    return <div className={`dark:bg-[#111827] bg-[#F9FAFB] px-4 py-16 lg:px-20 lg:py-24 lg:flex lg:justify-center`}>
        <div className="flex flex-col items-center text-sm gap-12 max-w-7xl lg:px-8">
            <Topic title = "About me"/>
            <div className="mt-[-24px] flex flex-col gap-[48px] lg:grid lg:grid-cols-2 lg:gap-12">
                <Portrait number = {2}/>
                <About_para/>
            </div>
            
        </div>
    </div>
}

export function Topic(props){
    return <div className={`dark:bg-[#374151] bg-[#E5E7EB] px-5 py-1 rounded-[12px] text-[#4B5563] dark:text-[#D1D5DB]`}>{props.title}</div>
}

function About_para(){
    return <div className=" flex flex-col gap-4 text-[#4B5563] dark:text-[#D1D5DB]">
        <h1 className={`text-[#111827] dark:text-[#F9FAFB] text-2xl mb-2 lg:text-3xl`}>Curious about me? Here you have it:</h1>
        <p>
        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
        </p>
        <p>
        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        <p>
        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
        </p>
        <p>
        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
        </p>
        <p>
        Finally, some quick bits about me.
        </p>
        <ul className="list-disc grid grid-cols-2 mx-4">
            <li>Full time freelancer</li>
            <li>Full time freelancer</li>
            <li>Full time freelancer</li>
            <li>Full time freelancer</li>
        </ul>
        <p>
        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
        </p>
    </div>
} 