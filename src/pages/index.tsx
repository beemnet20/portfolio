import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
console.log(inter)
export default function Home() {
  return (
    <main
    >
      <Hero />
      <Navbar />
    </main>
  );
}
