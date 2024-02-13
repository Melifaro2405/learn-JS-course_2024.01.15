import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  selectProductAmountById,
} from '../../redux/ui/cart/index.js';
import { selectDishById } from '../../redux/entities/dish/index.js';
import { Button } from '../Button/Button.jsx';
import styles from '../RestaurantMenu/styles.module.scss';

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectProductAmountById(state, dishId));

  const dispatch = useDispatch();

  if (!dish) return null;

  const addProduct = () => dispatch(increment(dishId));
  const deleteProduct = () => dispatch(decrement(dishId));

  return (
    <div className={styles.dishWrapper}>
      <li style={{ whiteSpace: 'nowrap' }}>{dish.name}</li>
      <div className={styles.buttonsWrapper}>
        <Button className={styles.button} onClick={deleteProduct}>
          -
        </Button>
        <p className={styles.count}>{amount}</p>
        <Button className={styles.button} onClick={addProduct}>
          +
        </Button>
      </div>
    </div>
  );
};
