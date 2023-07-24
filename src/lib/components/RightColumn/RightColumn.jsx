import styles from './RightColumn.module.css';

export const RightColumn = ({ children }) => {
  return <div className={styles.Main}>{children}</div>;
};
