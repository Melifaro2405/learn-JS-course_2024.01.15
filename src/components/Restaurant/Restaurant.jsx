import { NavLink, Outlet } from 'react-router-dom';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Restaurant = () => {
  const setActive = ({ isActive }) =>
    classNames(styles.link, { [styles.activeLink]: isActive });

  return (
    <div className={styles.root}>
      <NavLink to={`menu`} className={setActive}>
        <Button>Menu</Button>
      </NavLink>
      <NavLink to={`reviews`} className={setActive}>
        <Button>Reviews</Button>
      </NavLink>
      <Outlet />
    </div>
  );
};
