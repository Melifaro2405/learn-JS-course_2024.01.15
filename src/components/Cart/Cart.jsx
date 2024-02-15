import { useSelector } from 'react-redux';
import { selectCartProductIds } from '../../redux/ui/cart/index.js';
import { Dish } from '../Dish/Dish.jsx';

export const Cart = () => {
  const cartProductIds = useSelector(selectCartProductIds);
  return (
    <>
      <h2>Cart</h2>
      {cartProductIds.length ? (
        cartProductIds.map((productId) => {
          return <Dish key={productId} dishId={productId} />;
        })
      ) : (
        <h3>Empty</h3>
      )}
    </>
  );
};
