import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Divider from "@/components/Divider";

const inter = Inter({ subsets: ["latin"] });
console.log(inter)
export default function Home() {
  return (
    <main
    >
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
    </main>
  );
}
