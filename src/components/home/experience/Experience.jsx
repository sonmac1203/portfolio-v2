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
  }, []);

  const content = [
    {
      title: 'Software Engineer',
      employer: 'KMap',
      description:
        "Consistently deliver quality production code on a weekly basis, improving KMap's web interface, and contributing to key projects, including the migration to Next.js 12 and onboarding page redesign. Initiate the implementation and adoption of internal UI components for development efficiency and maintain effective communication with the data team over the management of public and private API endpoints.",
      time: 'Feb 2022 - Present',
      location: 'Tucson, AZ',
    },
    {
      title: 'Front-end Developer Intern',
      employer: 'Shopify Inc.',
      description:
        'Enhanced the usability of Finances Overview page with 1000+ lines of production React code, addressing visual defects, introducing new skeleton components, and improving analytical charts. Worked on a back-end solution to identify and fix a significant mismatch between web-displayed and stored revenue for 10,000+ users.',
      time: 'May 2022 - Aug 2022',
      location: 'Remote',
    },
    {
      title: 'Programming Lab Assistant',
      employer: 'UArizona.',
      description:
        'Facilitated weekly lab sessions/office hours to assist students with programming tasks and troubleshoot their C code, while helping instructors with designing assignments and grading exams.',
      time: 'Aug 2020 - Jan 2022',
      location: 'Remote',
    },
  ];

  return (
    <section id='experience' className='pt-20' ref={sectionRef}>
      {/* <SectionTitle>Experience</SectionTitle> */}
      <ul className='list-none flex flex-col gap-y-4'>
        {content.map(
          ({ title, employer, description, time, location }, key) => (
            <ExperienceCard
              title={title}
              employer={employer}
              description={description}
              time={time}
              location={location}
              key={key}
              id={key}
            />
          )
        )}
      </ul>
    </section>
  );
};
