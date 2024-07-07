import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });
console.log(inter)
export default function Home() {
  return (
    <main
    >
      <Hero />
      <h1 className="text-4xl text-center">Welcome to your new project!</h1>
    </main>
  );
}
