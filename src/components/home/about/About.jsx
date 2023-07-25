import { SectionTitle } from '@/lib/components';
import { useEffect } from 'react';

export const About = ({ sectionRef }) => {
  useEffect(() => {
    const handleScroll = () => {
      const offsetThreshold = 0; // 5 rem in pixels (assuming 1rem = 16px)

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top <= 0) {
        console.log('ABOUT');
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='about' className='pt-20' ref={sectionRef}>
      <p>
        Hi there! My name is Son Mac. I am a fourth-year undergraduate in
        Electrical & Computer Engineering at the University of Arizona. Entering
        college senior year, I have found myself really interested in software
        development, especially in the frontend domain, so I am now doing my
        best to pursue a career in this field later in the future. I enjoy
        coding and have been taking courses to further my understanding about
        programming principles, algorithms, and Web technologies. I started my
        journey with C, fell in love with object-oriented C++, Java, Python, and
        am now working with HTML, CSS, and JS on a regular basis. Currently, I
        am looking for fulltime opportunities in software engineer / frontend
        engineer for Summer and Fall 2023. Feel free to check out my resume and
        I am always ready for a chat!
      </p>
    </section>
  );
};
