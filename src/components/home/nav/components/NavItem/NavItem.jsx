import Link from 'next/link';
import styles from './NavItem.module.css';

export const NavItem = ({ label, active }) => {
  const activeStyle = {
    ...(active && { color: 'blue' }),
  };

  return (
    <li
      className={`flex items-center gap-x-3 ${styles.Slide} ${
        active && styles.Active
      }`}
    >
      <span className={`h-px w-8 bg-black ${styles.Bar}`} />
      <Link
        href={`/#${label.toLowerCase()}`}
        // style={activeStyle}
        className={styles.Text}
      >
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
