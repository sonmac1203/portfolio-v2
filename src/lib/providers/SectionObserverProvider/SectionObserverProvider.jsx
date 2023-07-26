import { useState, useRef, useMemo } from 'react';
import { SectionObserverContext } from '@/lib/context';

export const SectionObserverProvider = ({ children }) => {
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('about');

  const contextValue = useMemo(
    () => ({
      aboutSectionRef,
      experienceSectionRef,
      projectsSectionRef,
      currentSection,
      setCurrentSection,
    }),
    [currentSection, aboutSectionRef, experienceSectionRef, projectsSectionRef]
  );

  return (
    <SectionObserverContext.Provider value={contextValue}>
      {children}
    </SectionObserverContext.Provider>
  );
};
