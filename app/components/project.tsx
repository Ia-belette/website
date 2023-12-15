'use client';
import { siteConfig } from '@/app/site.config';
import { Badge } from './badge';

type Project = {
  name: string;
  description: string;
  link: string;
  icon: string;
  stack: string[];
};

export const Projects = () => (
  <section>
    <h2 className='md:px-4 md:pt-4'>
      <span className='text-1xl font-medium text-white/80'>Projets</span>
    </h2>
    {siteConfig.projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </section>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      className='mt-14 block border border-transparent md:mt-4 md:rounded-md md:p-4 lg:transition-all lg:hover:border lg:hover:border-[#1db954]/5 lg:hover:bg-[#1db954]/5'
    >
      <div className='text-1xl flex gap-2 font-medium text-white/80 '>
        <div className='flex h-10 w-10 items-center rounded-md bg-zinc-900 p-1'>
          <img src={project.icon} alt={project.name} className='object-cover' />
        </div>

        {project.name}
      </div>
      <p className='mt-4 leading-normal text-white/80'>{project.description}</p>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.stack.map((stack: any) => (
          <Badge key={stack}>{stack}</Badge>
        ))}
      </div>
    </a>
  );
};
