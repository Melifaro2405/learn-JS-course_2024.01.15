import styles from '../RestaurantMenu/styles.module.scss';
import { CountWithButtons } from '../CountWithButtons/CountWithButtons.jsx';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors.js';

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <div className={styles.dishWrapper}>
      <li>{dish.name}</li>
      <CountWithButtons />
    </div>
  );
};
