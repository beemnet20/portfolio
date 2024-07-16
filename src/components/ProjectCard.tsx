'use client';
import React from 'react';
import Image from 'next/image';
import Divider from './Divider';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  actions: { url: string; title: string; icon?: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-yellow-900 shadow-lg bg-black flex flex-col justify-between'>
      <Image src={project.image} alt={project.title} width={500} height={250} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{project.title}</div>
        <p className=''>{project.description}</p>
      </div>
      <div className='px-6 pt-2 pb-2'>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className='inline-block border rounded-full px-3 py-1 text-sm  text-base mr-2 mb-2'
          >
            {tag}
          </span>
        ))}
      </div>
      <div className='actions'>
        <Divider />
        <div className='content-center p-2'>
          {project.actions.map((action) => (
            <div
              key={action.title}
              className={`${
                action.title === 'View source' ? 'float-left' : 'float-right'
              } flex`}
            >
              {action.icon && (
                <a
                  target='_blank'
                  href={action.url}
                  className='bg-white p-2 mx-2 rounded-full inline-block'
                >
                  {' '}
                  <Image
                    src={action.icon}
                    alt={action.title}
                    width={25}
                    height={25}
                  />
                </a>
              )}
              {action.title != 'View source' && (
                <a
                  target='_blank'
                  href={action.url}
                  className='mx-2 bg-yellow-500 hover:bg-yellow-700 text-black font-bold p-2 rounded-full inline-block '
                >
                  {action.title}{' '}
                  <Image
                    className='inline'
                    src='/portfolio/external-link.svg'
                    alt={action.title}
                    width={25}
                    height={25}
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
