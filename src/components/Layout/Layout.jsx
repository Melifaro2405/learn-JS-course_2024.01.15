import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <div id="portal" />
      <div id="cart-modal" />
    </section>
  );
};
