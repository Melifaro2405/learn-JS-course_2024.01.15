import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <p>
        <i className={styles.title}>Select a restaurant:</i>
      </p>
    </header>
  );
};
