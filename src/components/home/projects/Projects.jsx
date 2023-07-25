import { SectionTitle } from '@/lib/components';
import { ProjectCard } from './components';

export const Projects = ({ sectionRef }) => {
  const projects = [];
  return (
    <section id='projects' className='pt-20' ref={sectionRef}>
      {/* <SectionTitle>Projects</SectionTitle> */}
      <ul className='list-none flex flex-col gap-y-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </section>
  );
};
