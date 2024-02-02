import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.headerContent}>
        <span>Select a restaurant:</span>
      </div>
    </header>
  );
};
