import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  selectProductAmountById,
} from '../../redux/ui/cart/index.js';
import { Button } from '../Button/Button.jsx';
import styles from '../RestaurantMenu/styles.module.scss';

export const Dish = ({ dishId, title }) => {
  const amount = useSelector((state) => selectProductAmountById(state, dishId));

  const dispatch = useDispatch();

  const addProduct = () => dispatch(increment(dishId));
  const deleteProduct = () => dispatch(decrement(dishId));

  return (
    <div className={styles.dishWrapper}>
      <li style={{ whiteSpace: 'nowrap' }}>{title}</li>
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
