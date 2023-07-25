import Link from 'next/link';

export const NavItem = ({ label, active }) => {
  const activeStyle = {
    ...(active && { color: 'blue' }),
  };

  return (
    <li className='flex items-center gap-x-3'>
      <span className='h-px w-8 bg-black' />
      <Link href={`/#${label.toLowerCase()}`} style={activeStyle}>
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
