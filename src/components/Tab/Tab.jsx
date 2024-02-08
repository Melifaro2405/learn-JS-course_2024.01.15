import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';
import classNames from 'classnames';
import styles from '../RestaurantTabs/styles.module.scss';

export const Tab = ({ restaurantId, onClick, isActiveTab }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div
      className={classNames(styles.tab, {
        [styles.active]: isActiveTab,
      })}
      onClick={onClick}
    >
      {restaurant.name}
    </div>
  );
};
