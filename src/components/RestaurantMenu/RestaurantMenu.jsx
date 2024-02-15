import { Dish } from '../Dish/Dish.jsx';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/index.js';
import { useEffect, useState } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurantId.js';
import { selectIsLoading } from '../../redux/ui/request/index.js';

export const RestaurantMenu = ({ restaurantId }) => {
  const [requestId, setRequestId] = useState(undefined);
  const isLoading = useSelector(
    (state) => requestId && selectIsLoading(state, requestId)
  );

  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getDishesByRestaurantId(restaurantId)).requestId);
  }, [restaurantId, dispatch]);

  if (!dishIds.length) return null;

  if (isLoading) return <div>Loading menu...</div>;

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.menuWrapper}>
        {dishIds.map((id) => (
          <Dish key={id} dishId={id} />
        ))}
      </ul>
    </div>
  );
};
