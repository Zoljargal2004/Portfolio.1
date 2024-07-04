import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/About";
import { Skills } from "./components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <About />
      <Skills/>
    </main>
  );
}
