import { Dish } from '../Dish/Dish.jsx';
import styles from './styles.module.scss';

export const RestaurantMenu = ({ menuIds }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul>
        {menuIds.map((id) => (
          <Dish key={id} dishId={id} />
        ))}
      </ul>
    </div>
  );
};
