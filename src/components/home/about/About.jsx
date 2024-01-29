import { useEffect, useContext, useState } from 'react';
import { SectionObserverContext } from '@/lib/context';
import { SectionTitle } from '@/lib/components';

export const About = ({ sectionRef }) => {
  const { setCurrentSection } = useContext(SectionObserverContext);
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= 0) {
        setCurrentSection('about');
      }
    };
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef, setCurrentSection]);

  const extendButton = (
    <span
      onClick={() => setExtended(true)}
      className='text-ivory font-normal cursor-pointer hover:underline hover:underline-offset-4'
    >
      read more
    </span>
  );

  const shrinkButton = (
    <span
      onClick={() => setExtended(false)}
      className='text-brightred font-normal cursor-pointer'
    >
      Close <i className='fa-solid fa-xmark' />
    </span>
  );

  return (
    <section
      id='about'
      className='pt-20 flex flex-col gap-y-4 font-light'
      ref={sectionRef}
    >
      <SectionTitle>About</SectionTitle>
      <p>
        Hi! I am Son Mac, a{' '}
        <span className='text-ivory font-normal'>software engineer</span> and a{' '}
        <span className='text-ivory font-normal'>graduate</span> from University
        of Arizona. I like{' '}
        <span className='text-ivory font-normal'>software</span> and I love
        building things that improve lives. While my expertise lies in{' '}
        <span className='text-bright font-normal'>frontend-focused</span> tech,
        I&apos;m always motivated to take on{' '}
        <span className='text-bright font-normal'>fullstack</span> projects.
        With my work at the{' '}
        <span className='text-vantapurple font-medium'>Llama</span>, I strive to
        make the <span className='text-ivory font-normal'>Internet</span> a
        safer place for everybody.
      </p>
      <p>
        When I am not on my laptop, I enjoy playing with my cat, drinking boba,
        going on road trips, and spending weekends camping with my girlfriend.
      </p>
      <p>
        Feel free to check out my{' '}
        <a
          className='text-bright font-normal'
          href='/Resume_SonMac.pdf'
          target='_blank'
        >
          resume
        </a>
        , or {extendButton} about me.
      </p>
      {extended && (
        <>
          <p>
            While it seems easy to talk about my passion now, it wasn&apos;t
            like this at first. I started out as a Civil Engineering major in
            college, without knowing much about what I wanted to do with my
            future. However, everything changed after an introductory C course I
            attended in the second semester. As slow-witted as I was back then,
            I knew that I had fallen in love with the maths, the logic, and
            especially the code that hide behind those great applications.
          </p>
          <p>
            Since then, I&apos;ve built a computer processor in{' '}
            <span className='text-ivory font-normal'>Assembly</span>, developed
            applications in{' '}
            <span className='text-ivory font-normal'>
              C++, Java, and Python
            </span>
            , met a friend who introduced me to{' '}
            <span className='text-ivory font-normal'>
              fullstack development
            </span>
            , deployed a <span className='text-ivory font-normal'>website</span>{' '}
            as a birthday gift for my girlfriend, got an internship at{' '}
            <span className='text-ivory font-normal'>Shopify</span>, and almost
            won the{' '}
            <span className='text-ivory font-normal'>Best Software Design</span>{' '}
            award in an engineering contest in my senior year. After 2 years of
            helping to transform how academic programs and individuals{' '}
            <span className='text-ivory font-normal'>visualize data</span>,
            I&apos;m now contributing to{' '}
            <span className='text-ivory font-normal'>
              secure digital footprints
            </span>{' '}
            for organizations of all sizes. {shrinkButton}
          </p>
        </>
      )}
    </section>
  );
};
