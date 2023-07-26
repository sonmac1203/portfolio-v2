import Link from 'next/link';
import styles from './NavItem.module.css';

export const NavItem = ({ label, active }) => {
  return (
    <li
      className={`flex items-center gap-x-3 text-sm ${styles.Slide} ${
        active && styles.Active
      }`}
    >
      <span className={`h-px w-8 ${styles.Bar} bg-ash`} />
      <Link href={`/#${label.toLowerCase()}`} className={styles.Text}>
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
