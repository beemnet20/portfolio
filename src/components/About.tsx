import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  const skills = [
    { skill: 'React', icon: '/portfolio/logos/react.svg' },
    { skill: 'Next.js', icon: '/portfolio/logos/nextjs.svg' },
    { skill: 'Node.js', icon: '/portfolio/logos/nodejs.svg' },
    { skill: 'PostgreSQL', icon: '/portfolio/logos/postgresql.svg' },
    { skill: 'JavaScript', icon: '/portfolio/logos/javascript.svg' },
    { skill: 'TypeScript', icon: '/portfolio/logos/typescript.svg' },
    { skill: 'HTML', icon: '/portfolio/logos/html.svg' },
    { skill: 'CSS', icon: '/portfolio/logos/css.svg' },
    { skill: 'Python', icon: '/portfolio/logos/python.svg' },
    { skill: 'Flask', icon: '/portfolio/logos/flask.svg' },
    { skill: 'Git', icon: '/portfolio/logos/git.svg' },
    { skill: 'R', icon: '/portfolio/logos/r.svg' },
    { skill: 'Docker', icon: '/portfolio/logos/docker.svg' },
    { skill: 'Kubernetes', icon: '/portfolio/logos/kubernetes.svg' },
    { skill: 'linux', icon: '/portfolio/logos/linux.svg' },
    { skill: 'Figma', icon: '/portfolio/logos/figma.svg' },
  ];
  return (
    <div
      id='about'
      style={{ scrollMarginTop: '100px' }}
      className='flex m-8 flex-col h-full'
    >
      <div className='grid sm:grid-cols-4 gap-4'>
        <Image
          width={250}
          height={250}
          className='rounded-full flex-col '
          src='/portfolio/me.jpg'
          alt='Profile Picture'
        />

        <section className='col-span-3'>
          <h1 className='text-2xl font-bold mb-2'>About me</h1>
          <p className='text-lg'>
            I&apos;m Beemnet (Bee) Workeneh, a full stack developer based in Seattle,
            WA. My educational background is in Mechanical Engineering. My
            capstone project was the first time that I was exposed to coding and
            I fell in love with it. I have been coding ever since. I am
            passionate about creating beautiful and functional applications.
            This website contains some of projects that I have worked that
            highlight a subset of my skills.
          </p>
        </section>
      </div>

      <br />
      <h2 className='text-2xl'>Skills</h2>

      <div className='mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className='flex flex-col rounded-lg items-center justify-center bg-white'
          >
            <Image
              className='mt-2'
              width={50}
              height={50}
              src={skill.icon}
              alt={skill.skill}
            />
            <p className='text-black m-1'>{skill.skill}</p>
          </div>
        ))}
      </div>
      <span>and more...</span>
    </div>
  );
};

export default About;
