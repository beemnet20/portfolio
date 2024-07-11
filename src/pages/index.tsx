import Image from 'next/image';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/portfolio/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
