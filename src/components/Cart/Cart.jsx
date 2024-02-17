import { useSelector } from 'react-redux';
import { selectCartDishIds } from '../../redux/ui/cart/index.js';
import { Dish } from '../Dish/Dish.jsx';

export const Cart = () => {
  const cartDishIds = useSelector(selectCartDishIds);

  return (
    <>
      <h2>Cart</h2>
      {cartDishIds.length ? (
        cartDishIds.map((dishId) => {
          return <Dish key={dishId} id={dishId} isCart />;
        })
      ) : (
        <h3>Empty</h3>
      )}
    </>
  );
};
