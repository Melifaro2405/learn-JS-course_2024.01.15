import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classNames(styles.root, styles.background)}>{children}</main>
      <Footer />
    </>
  );
};
