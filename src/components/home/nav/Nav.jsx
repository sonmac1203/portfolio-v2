import { NavItem } from './components';
import { useContext } from 'react';
import { SectionObserverContext } from '@/lib/context';

export const Nav = () => {
  const { currentSection } = useContext(SectionObserverContext);

  return (
    <section className='hidden lg:block mt-20'>
      <ul className='list-none flex flex-col gap-y-5'>
        <NavItem label='About' active={currentSection === 'about'} />
        <NavItem label='Experience' active={currentSection === 'experience'} />
        <NavItem label='Projects' active={currentSection === 'projects'} />
      </ul>
    </section>
  );
};
