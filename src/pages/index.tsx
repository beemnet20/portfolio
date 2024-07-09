import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Projects from "@/components/Projects";



export default function Home() {
  return (
    <main
    >
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
    </main>
  );
}
