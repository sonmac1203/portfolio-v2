import styles from './RightColumn.module.css';

export const RightColumn = ({ children }) => {
  return (
    <div className={`${styles.Main} flex flex-col gap-y-5 pb-10`}>
      {children}
    </div>
  );
};
