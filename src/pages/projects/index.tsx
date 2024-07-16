'use client';
import React from 'react';
import PageTitle from '../../components/PageTitle';
import useSWR from 'swr';
import ProjectCard, { Project } from '@/components/ProjectCard';
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Projects: React.FC = () => {
  const { data, error } = useSWR(`/portfolio/data/projects.json`, fetcher);
  if (error) return 'Failed to load';
  return (
    <div className='flex m-8 flex-col h-full'>
      <PageTitle title='Projects' id='projects' />
      {!data && <div>Loading...</div>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data &&
          data.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
