import styles from './LeftColumn.module.css';

export const LeftColumn = ({ children }) => {
  return (
    <div
      className={`${styles.Main} sm:h-screen sm:sticky sm:top-0 flex flex-col pt-20 pb-10`}
    >
      {children}
    </div>
  );
};
