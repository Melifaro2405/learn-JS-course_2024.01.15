import { Dish } from '../Dish/Dish.jsx';
import { useGetMenuQuery } from '../../redux/services/api.js';
import styles from './styles.module.scss';

export const RestaurantMenu = ({ restaurantId }) => {
  const { data: menu, isFetching } = useGetMenuQuery(restaurantId);

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.menuWrapper}>
        {isFetching ? (
          <div>Loading menu...</div>
        ) : (
          menu.map(({ id, name }) => <Dish key={id} dishId={id} title={name} />)
        )}
      </ul>
    </div>
  );
};
