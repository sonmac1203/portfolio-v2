import { SectionTitle } from '@/lib/components';
import { ProjectCard } from './components';
import { useEffect, useContext } from 'react';
import { SectionObserverContext } from '@/lib/context';

export const Projects = ({ sectionRef }) => {
  const projects = [
    {
      name: 'Antaris',
      description:
        'Leading a team of 5 engineering students to create a cutting-edge health monitoring system that seamlessly connects researchers and patients through Amazon Alexa devices, complemented by a full-stack web application built in Next.js.',
      photoName: '',
      tech: '',
    },
    {
      name: 'Pulses - The health tracker',
      description:
        'A 3-person project that provides a web-based personal dashboard to visualize heart rate and blood oxygen saturation level measured from an IoT-enabled management board of Particle.',
      photoName: '',
      tech: '',
    },

    {
      name: 'SocialHub360',
      description:
        'A personal project featuring a React-Firebase web app that enables all-in-one content management on Facebook and Instagram for restaurant and shop owners.',
      photoName: '',
      tech: '',
    },

    {
      name: 'Restaurant Admin Tool',
      description:
        'Simulated Java-powered restaurant administration tool for managers/chefs, and customers to perform different kinds of real-life tasks such as managing staff and ordering food.',
      photoName: '',
      tech: '',
    },

    {
      name: 'Between Us',
      description:
        'A deployed website serving as the birthday present for my partner featuring creating a photo gallery, marking memorable events, exchanging notes, and keeping track of elapsed time.',
      photoName: '',
      tech: '',
    },
  ];
  const { setCurrentSection } = useContext(SectionObserverContext);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= 20) {
        setCurrentSection('projects');
      }
    };
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id='projects' className='pt-20' ref={sectionRef}>
      {/* <SectionTitle>Projects</SectionTitle> */}
      <ul className='list-none flex flex-col gap-y-4'>
        {projects.map((p, k) => (
          <ProjectCard
            name={p.name}
            description={p.description}
            photoName={p.photoName}
            tech={p.tech}
          />
        ))}
      </ul>
    </section>
  );
};