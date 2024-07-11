import React, { useState } from 'react';
import Image from 'next/image';
import PageTitle from './PageTitle';

const Skill = (skill: string, icon: string) => {
  const [size, setSize] = useState<number>(50);
  return (
    <div
      key={skill}
      className='flex flex-col rounded-md bg-white'
    >
      <div className='sm:grid sm:grid-cols-3'>
        <div className='sm:col-span-2'>
          <div
            style={{ minHeight: '70px' }}
            onMouseOver={() => setSize(60)}
            onMouseOut={() => setSize(50)}
          >
            <Image
              className='m-2'
              width={size}
              height={size}
              src={icon}
              alt={skill}
            />
          </div>
          <p className=' text-black mx-2 my-1'>{skill}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [size, setSize] = useState<number>(200);

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
    <div className='flex m-8 flex-col h-full'>
      <PageTitle title='About me' id='about' />
      <div className='grid sm:grid-cols-6 gap-3'>
        <div className='sm:col-span-1'>
          <div
            className=''
            onMouseOver={() => setSize(250)}
            onMouseOut={() => setSize(200)}
          >
            <Image
              width={size}
              height={size}
              className=' '
              src='/portfolio/me.jpg '
              alt='Profile Picture'
            />
          </div>
        </div>

        <section className='col-span-4'>
          <p className='text-lg'>
            I&apos;m Beemnet (Bee) Workeneh, a full stack developer based in
            Seattle, WA. My educational background is in Mechanical Engineering.
            My capstone project was the first time that I was exposed to coding
            and I fell in love with it. I have been coding ever since. I am
            passionate about creating beautiful and functional applications.
            This website contains some of projects that I have worked that
            highlight a subset of my skills.
          </p>
          <br />
          <h2 className='text-lg'>I have experience with </h2>
          <div className='mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 w-half'>
            {skills.map((skill) => Skill(skill.skill, skill.icon))}
          </div>
          <span>and more...</span>
        </section>
      </div>
    </div>
  );
};

export default About;
