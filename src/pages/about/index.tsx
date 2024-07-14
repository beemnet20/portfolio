import React, { useState } from 'react';
import Image from 'next/image';
import PageTitle from '../../components/PageTitle';
import { link } from 'fs';

const SkillCard = (skill: string, icon: string, description: string, link: string) => {
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
              {description}
            </span>
          </div>
        </div>

        <a href={link} target='_blank' className='flex p-4'>
          <Image
            className=''
            width={25}
            height={25}
            src='/portfolio/external-link.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
};


const About: React.FC = () => {
  const [size, setSize] = useState<number>(200);

  const skills = [
    { skill: 'React', description: 'UI Library', icon: '/portfolio/logos/react.svg', link: 'https://react.dev/' },
    { skill: 'Next.js', description: 'React Framework', icon: '/portfolio/logos/nextjs.svg', link: 'https://nextjs.org/' },
    { skill: 'Node.js', description: 'JS Runtime', icon: '/portfolio/logos/nodejs.svg', link: 'https://nodejs.org/' },
    { skill: 'PostgreSQL', description: 'SQL Database', icon: '/portfolio/logos/postgresql.svg', link: 'https://www.postgresql.org/'},
    { skill: 'JavaScript', description: 'Programming Language', icon: '/portfolio/logos/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    { skill: 'TypeScript', description: 'JS Superset', icon: '/portfolio/logos/typescript.svg', link: 'https://www.typescriptlang.org/'},
    { skill: 'HTML', description: 'Markup Language', icon: '/portfolio/logos/html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    { skill: 'CSS', description: 'Style Sheets', icon: '/portfolio/logos/css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    { skill: 'Python', description: 'Programming Language', icon: '/portfolio/logos/python.svg', link: 'https://www.python.org/' },
    { skill: 'Flask', description: 'Web Framework', icon: '/portfolio/logos/flask.svg', link: 'https://flask.palletsprojects.com/' },
    { skill: 'Git', description: 'Version Control', icon: '/portfolio/logos/git.svg', link: 'https://git-scm.com/' },
    { skill: 'R', description: 'Stats  Language', icon: '/portfolio/logos/r.svg', link: 'https://www.r-project.org/' },
    { skill: 'Docker', description: 'Containerization', icon: '/portfolio/logos/docker.svg', link: 'https://www.docker.com/'},
    { skill: 'Kubernetes', description: 'Orchestration', icon: '/portfolio/logos/kubernetes.svg', link: 'https://kubernetes.io/'},
    { skill: 'linux', description: 'OS Kernel', icon: '/portfolio/logos/linux.svg', link: 'https://www.linux.org/'},
    { skill: 'Figma', description: 'Design Tool', icon: '/portfolio/logos/figma.svg', link: 'https://www.figma.com/'},
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
            {skills.map((skill) => SkillCard(skill.skill, skill.icon, skill.description, skill.link))}
          </div>
          <span>and more...</span>
        </section>
      </div>
    </div>
  );
};

export default About;
