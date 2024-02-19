import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useGetRestaurantsQuery } from '../../redux/services/api.js';
import styles from './styles.module.scss';

export const RestaurantTabs = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  const getLinkStyles = ({ isActive }) =>
    classNames(styles.tab, { [styles.active]: isActive });

  return (
    <div className={styles.root}>
      {restaurants.map(({ id, name }) => (
        <NavLink key={id} to={id} className={getLinkStyles}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};
