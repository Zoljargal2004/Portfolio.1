import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Work } from "./components/work";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  );
}
