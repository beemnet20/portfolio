import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PageTitle from '../../components/PageTitle';
import OverlayImage from '@/components/OverlayImage';

const SkillCard = (
  skill: string,
  icon: string,
  description: string,
  link: string,
  invert?: boolean
) => {
  return (
    <div key={skill} className=' rounded-lg border'>
      <div className='flex flex-row justify-between'>
        <div className='flex'>
          <Image
            className='p-4  inline-block'
            style={{filter: invert ?'invert(100%)':'none'}}
            width={65}
            height={65}
            src={icon}
            alt={skill}
          />
          <div className='inline-block my-auto'>
            <span className=' text-l font-bold mx-0 inline-block'>
              {skill}
            </span>
            <br />
            <span className=' text-sm  mx-0 inline-block'>
              {description}
            </span>
          </div>
        </div>

        <a href={link} target='_blank' className='flex p-4'>
          <Image
            className=''
            style = {{filter: 'invert(100%)'}}
            width={25}
            height={25}
            src='/external-link.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
};

const About: React.FC = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    {
      skill: 'React',
      description: 'UI Library',
      icon: '/logos/react.svg',
      link: 'https://react.dev/',
    },
    {
      skill: 'Next.js',
      description: 'React Framework',
      icon: '/logos/nextjs.svg',
      link: 'https://nextjs.org/',
      invert: true
    },
    {
      skill: 'Node.js',
      description: 'JS Runtime',
      icon: '/logos/nodejs.svg',
      link: 'https://nodejs.org/',
    },
    {
      skill: 'PostgreSQL',
      description: 'SQL Database',
      icon: '/logos/postgresql.svg',
      link: 'https://www.postgresql.org/',
    },
    {
      skill: 'JavaScript',
      description: 'Programming Language',
      icon: '/logos/javascript.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      skill: 'TypeScript',
      description: 'JS Superset',
      icon: '/logos/typescript.svg',
      link: 'https://www.typescriptlang.org/',
    },
    {
      skill: 'HTML',
      description: 'Markup Language',
      icon: '/logos/html.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      skill: 'CSS',
      description: 'Style Sheets',
      icon: '/logos/css.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      invert: true
    },
    {
      skill: 'Python',
      description: 'Programming Language',
      icon: '/logos/python.svg',
      link: 'https://www.python.org/',
    },
    {
      skill: 'Flask',
      description: 'Web Framework',
      icon: '/logos/flask.svg',
      link: 'https://flask.palletsprojects.com/',
    },
    {
      skill: 'Git',
      description: 'Version Control',
      icon: '/logos/git.svg',
      link: 'https://git-scm.com/',
    },
    {
      skill: 'R',
      description: 'Stats  Language',
      icon: '/logos/r.svg',
      link: 'https://www.r-project.org/',
    },
    {
      skill: 'Docker',
      description: 'Containerization',
      icon: '/logos/docker.svg',
      link: 'https://www.docker.com/',
    },
    {
      skill: 'Kubernetes',
      description: 'Orchestration',
      icon: '/logos/kubernetes.svg',
      link: 'https://kubernetes.io/',
    },
    {
      skill: 'linux',
      description: 'OS Kernel',
      icon: '/logos/linux.svg',
      link: 'https://www.linux.org/',
    },
    {
      skill: 'Figma',
      description: 'Design Tool',
      icon: '/logos/figma.svg',
      link: 'https://www.figma.com/',
    },
  ];
  return (
    <div className='flex m-8 flex-col h-full'>
      {/* <PageTitle title='About me' id='about' /> */}
      <div className='flex  mx-auto flex-col sm:flex-row lg:w-3/4 mx-auto'>
        <OverlayImage />
        <div className='m-4' style={{opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out'}}>
          <h1 className='text-6xl mb-4'>Hello. I&apos;m <span style={{ color: '#fde047' }}>Bee</span>mnet Workeneh </h1>
          <p className='mb-3 first-letter:text-7xl first-letter:font-bold first-letter:me-3 first-letter:float-start'>
            I am full stack developer based in Seattle, WA. My educational
            background is in Mechanical Engineering. My capstone project was the
            first time that I was exposed to coding and I fell in love with it.
            I have been coding ever since. I am passionate about creating
            beautiful and functional applications. This website contains some of
            projects that I have worked that highlight a subset of my skills.
          </p>
        </div>
      </div>
      <section className='mt-8 lg:w-3/4 mx-auto' style={{opacity: isLoaded ? 1 : 0, transition: 'opacity 2s ease-in-out'}}>
        <h2 className='text-xl'>I have experience with </h2>
        <div className='mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-half'>
          {skills.map((skill) =>
            SkillCard(skill.skill, skill.icon, skill.description, skill.link, skill.invert),
          )}
        </div>
        <span>and more...</span>
      </section>
    </div>
  );
};

export default About;
