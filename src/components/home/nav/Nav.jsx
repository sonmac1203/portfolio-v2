import Link from 'next/link';
import { NavItem } from './components';

export const Nav = () => {
  return (
    <section className='mt-20'>
      <ul className='list-none'>
        <NavItem label='About' active />
        <NavItem label='Experience' />
        <NavItem label='Projects' />
        <NavItem label='Now' />
      </ul>
    </section>
  );
};
