import { SectionTitle } from '@/lib/components';
import { ExperienceCard } from './components';
import { useEffect } from 'react';

export const Experience = ({ sectionRef }) => {
  useEffect(() => {
    const handleScroll = () => {
      const offsetThreshold = 0; // 5 rem in pixels (assuming 1rem = 16px)

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= 0) {
        console.log('EXPERIENCE');
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const content = [
    {
      title: 'Software Engineer',
      employer: 'KMap',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique. Quis commodo odio aenean sed adipiscing diam donec. Fermentum odio eu feugiat pretium nibh ipsum.',
      time: 'Feb 2022 - Present',
      location: 'Tucson, AZ',
    },
    {
      title: 'Front-end Developer Intern',
      employer: 'Shopify Inc.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique. Quis commodo odio aenean sed adipiscing diam donec. Fermentum odio eu feugiat pretium nibh ipsum.',
      time: 'May 2022 - Aug 2022',
      location: 'Remote',
    },
    {
      title: 'Programming Lab Assistant',
      employer: 'UArizona.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique. Quis commodo odio aenean sed adipiscing diam donec. Fermentum odio eu feugiat pretium nibh ipsum.',
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
