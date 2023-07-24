import styles from './LeftColumn.module.css';

export const LeftColumn = () => {
  return (
    <div className={`${styles.Main} sm:h-screen sm:sticky sm:top-0`}>
      LeftColumn
    </div>
  );
};
