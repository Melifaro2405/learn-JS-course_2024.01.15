import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer />
    </>
  );
};
