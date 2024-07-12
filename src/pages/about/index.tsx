import React, { useState } from 'react';
import Image from 'next/image';
import PageTitle from '../../components/PageTitle';

const SkillCard = (skill: string, icon: string) => {
  return (
    <div key={skill} className=' rounded-lg  bg-gray-100'>
      <div className='flex flex-row justify-between'>
        <div className='flex'>
          <Image
            className='p-4  inline-block'
            width={65}
            height={65}
            src={icon}
            alt={skill}
          />
          <div className='inline-block my-auto'>
            <span className='text-black text-l font-bold mx-0 inline-block'>
              {skill}
            </span>
            <br />
            <span className='text-black text-sm  mx-0 inline-block'>
              description
            </span>
          </div>
        </div>

        <button className='text-gray-500 text-4xl mx-4 font-bold my-auto'>⋮</button>
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
          <div className='mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-half'>
            {skills.map((skill) => SkillCard(skill.skill, skill.icon))}
          </div>
          <span>and more...</span>
        </section>
      </div>
    </div>
  );
};

export default About;
