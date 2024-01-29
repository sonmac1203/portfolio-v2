import { ProjectCard } from './components';
import { SectionTitle } from '@/lib/components';
import { useEffect, useContext } from 'react';
import { SectionObserverContext } from '@/lib/context';

export const Projects = ({ sectionRef }) => {
  const projects = [
    {
      name: 'Antaris',
      description:
        'Leading a team of 5 engineering students to create a cutting-edge health monitoring system that seamlessly connects researchers and patients through Amazon Alexa devices, complemented by a full-stack web application built in Next.js.',
      photoName: 'antaris-project.svg',
      tech: 'Next,Node,Amazon Alexa API,MongoDB',
      href: 'https://github.com/sonmac1203/antaris-web',
      demo: 'https://drive.google.com/file/d/1r2Wvm40ylW4Xhr6hDIJIms-Vn9OLno7D/view?usp=sharing',
    },
    {
      name: 'Pulses - The health tracker',
      description:
        'A 3-person project that provides a web-based personal dashboard to visualize heart rate and blood oxygen saturation level measured from an IoT-enabled management board of Particle.',
      photoName: 'pulses-project.png',
      tech: 'MongoDB,Node,Express,jQuery,Plotly.js',
      report:
        'https://docs.google.com/document/d/13-IQQG7I4ile9W8B4QoKFX30se48GQ0ZcCzXuCqxFYg/edit?usp=sharing',
      demo: 'https://clipchamp.com/watch/0stCxYWBzli',
      href: 'https://github.com/sonmac1203/health-rate-monitor',
    },

    {
      name: 'SocialHub360',
      description:
        'A personal project featuring a React-Firebase web app that enables all-in-one content management on Facebook and Instagram for restaurant and shop owners.',
      photoName: 'socialhub-project.png',
      tech: 'React,Firebase,Facebook Graph API',
      href: 'https://github.com/sonmac1203/Social-media-dashboard',
    },

    {
      name: 'Restaurant Admin Tool',
      description:
        'Simulated Java-powered restaurant administration tool for managers/chefs, and customers to perform different kinds of real-life tasks such as managing staff and ordering food.',
      photoName: 'restaurant-project.png',
      tech: 'Java, Swing',
      href: 'https://github.com/sonmac1203/Restaurant_System',
    },

    {
      name: 'Between Us',
      description:
        'A deployed website serving as the birthday present for my partner featuring creating a photo gallery, marking memorable events, exchanging notes, and keeping track of elapsed time.',
      photoName: 'betweenus-project.png',
      tech: 'React,Express,Node,MongoDB',
      href: 'https://github.com/sonmac1203/birthday-app',
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
  }, [sectionRef, setCurrentSection]);

  return (
    <section id='projects' className='pt-12 md:pt-20' ref={sectionRef}>
      <SectionTitle className='mb-6'>Projects</SectionTitle>
      <ul className='list-none flex flex-col gap-y-16 md:gap-y-14'>
        {projects.map((p, k) => (
          <ProjectCard
            name={p.name}
            description={p.description}
            photoName={p.photoName}
            tech={p.tech}
            report={p.report || null}
            demo={p.demo || null}
            href={p.href || null}
            key={k}
          />
        ))}
      </ul>
    </section>
  );
};
