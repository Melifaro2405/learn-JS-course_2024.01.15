import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { AuthContext } from '../../contexts/authContext.jsx';
import { Button } from '../Button/Button.jsx';
import { AuthModal } from '../AuthModal/AuthModal.jsx';
import { CartButton } from '../CartButton/CartButton.jsx';
import exitSvg from '../../assets/svg/exit-svgrepo-com.svg';
import styles from './styles.module.scss';

export const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => setUser({});

  const getLinkStyles = ({ isActive }) =>
    classNames(styles.link, { [styles.activeLink]: isActive });

  return (
    <header className={styles.root}>
      <div className={styles.headerContent}>
        {user?.name ? (
          <div className={styles.contentWrapper}>
            <span>{user.name}</span>
            <Button className={styles.logoutButton}>
              <img src={exitSvg} alt={'exit-button'} onClick={handleLogout} />
            </Button>
          </div>
        ) : (
          <Button
            className={styles.loginButton}
            onClick={() => setIsOpen(true)}
          >
            Log In
          </Button>
        )}
      </div>
      <nav className={styles.navigation}>
        <NavLink to="/" className={getLinkStyles}>
          Home
        </NavLink>
        <NavLink to="restaurants" className={getLinkStyles}>
          Restaurants
        </NavLink>
        <NavLink to="about-us" className={getLinkStyles}>
          About us
        </NavLink>
      </nav>
      {isOpen && <AuthModal onClose={() => setIsOpen(false)} />}
      <CartButton />
    </header>
  );
};
