import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export const Layout = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <div id="portal" />
      <div id="cart-modal" />
    </section>
  );
};
