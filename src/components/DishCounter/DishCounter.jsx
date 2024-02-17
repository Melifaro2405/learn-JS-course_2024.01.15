import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  selectDishAmountById,
} from '../../redux/ui/cart/index.js';
import { Button } from '../Button/Button.jsx';
import styles from '../RestaurantMenu/styles.module.scss';

export const DishCounter = ({ dishId }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dishId));

  const dispatch = useDispatch();

  const addProduct = () => dispatch(increment(dishId));
  const deleteProduct = () => dispatch(decrement(dishId));

  return (
    <div className={styles.buttonsWrapper}>
      <Button className={styles.button} onClick={deleteProduct}>
        -
      </Button>
      <p className={styles.count}>{amount}</p>
      <Button className={styles.button} onClick={addProduct}>
        +
      </Button>
    </div>
  );
};
