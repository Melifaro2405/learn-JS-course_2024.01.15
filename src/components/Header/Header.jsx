import { useContext } from 'react';
import exitSvg from '../../assets/svg/exit-svgrepo-com.svg';
import { Button } from '../Button/Button.jsx';
import { AuthContext } from '../../contexts/authContext.jsx';
import styles from './styles.module.scss';

export const Header = () => {
  const { user, setUser, setIsOpenedAuthModal } = useContext(AuthContext);

  const handleOpenAuthModal = () => setIsOpenedAuthModal(true);

  const handleLogout = () => setUser({});

  return (
    <header className={styles.root}>
      <div className={styles.headerContent}>
        {user?.name ? (
          <div className={styles.authContainer}>
            <span>You logged in as {user.name}</span>
            <Button className={styles.logoutButton}>
              <img src={exitSvg} alt={'exit-button'} onClick={handleLogout} />
            </Button>
          </div>
        ) : (
          <Button className={styles.loginButton} onClick={handleOpenAuthModal}>
            Log In
          </Button>
        )}
      </div>
    </header>
  );
};
