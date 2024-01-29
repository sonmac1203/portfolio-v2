import { SectionTitle } from '@/lib/components';
import { ExperienceCard } from './components';
import { useEffect, useContext } from 'react';
import { SectionObserverContext } from '@/lib/context';

export const Experience = ({ sectionRef }) => {
  const { setCurrentSection } = useContext(SectionObserverContext);
  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= 20) {
        setCurrentSection('experience');
      }
    };
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef, setCurrentSection]);

  const content = [
    {
      title: 'Software Engineer',
      employer: 'Vanta, Inc.',
      description:
        'Build and deliver to secure the Internet and protect consumer data.',
      time: 'Jan 2024 - Present',
      location: 'San Francisco, CA',
      href: 'https://www.vanta.com',
      tech: 'React,TypeScript,GraphQL',
    },
    {
      title: 'Software Developer',
      employer: 'kmap.arizona.edu',
      description:
        "Consistently deliver quality production code, improving KMap's web interface, and contribute to key projects, including the migration to Next.js (12 & 13) and onboarding page redesign. Implement and streamline internal UI components for development efficiency and maintain effective communication with data team over the management of public and private API endpoints.",
      time: 'Feb 2022 - Jan 2024',
      location: 'Tucson, AZ',
      href: 'https://kmap.arizona.edu',
      tech: 'Next,TS/JS,MongoDB,Python,D3,Mapbox',
    },
    {
      title: 'Frontend Developer Intern',
      employer: 'Shopify Inc.',
      description:
        'Enhanced the usability of Finances Overview page with 1000+ lines of production React code, addressing visual defects, introducing new skeleton components, and improving analytical charts. Worked on a backend solution to identify and fix a significant mismatch between web-displayed and stored revenue for 10,000+ users.',
      time: 'May 2022 - Aug 2022',
      location: 'Remote',
      href: 'https://www.shopify.com',
      tech: 'React,TypeScript,SQL,GraphQL',
    },
    {
      title: 'Programming Lab Assistant',
      employer: 'UArizona',
      description:
        'Facilitated weekly lab sessions/office hours to assist students with programming tasks and troubleshoot their C code, while helping instructors with designing assignments and grading exams.',
      time: 'Aug 2020 - Jan 2022',
      location: 'Tucson, AZ',
    },
  ];

  return (
    <section id='experience' className='pt-12 md:pt-20' ref={sectionRef}>
      <SectionTitle className='mb-6'>Experience</SectionTitle>
      <ul className='list-none flex flex-col gap-y-12'>
        {content.map(
          (
            { title, employer, description, time, location, tech, href },
            key
          ) => (
            <ExperienceCard
              title={title}
              employer={employer}
              description={description}
              time={time}
              location={location}
              key={key}
              id={key}
              tech={tech || null}
              href={href || null}
            />
          )
        )}
      </ul>
    </section>
  );
};
