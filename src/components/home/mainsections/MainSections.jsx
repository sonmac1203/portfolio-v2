import { useEffect, useContext } from 'react';
import { About } from '../about';
import { Experience } from '../experience';
import { Projects } from '../projects';
import { SectionObserverContext } from '@/lib/context';

export const MainSections = () => {
  const { aboutSectionRef, experienceSectionRef, projectsSectionRef } =
    useContext(SectionObserverContext);

  return (
    <>
      <About sectionRef={aboutSectionRef} />
      <Experience sectionRef={experienceSectionRef} />
      <Projects sectionRef={projectsSectionRef} />
    </>
  );
};
