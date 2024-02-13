import { Dish } from '../Dish/Dish.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/index.js';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurantId.js';
import { REQUEST_STATUS } from '../../redux/ui/request/constants.js';
import { useRequest } from '../../hooks/useRequest.js';
import styles from './styles.module.scss';

export const RestaurantMenu = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  if (!dishIds.length) return null;

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.menuWrapper}>
        {requestStatus === REQUEST_STATUS.pending ? (
          <div>Loading menu...</div>
        ) : (
          dishIds.map((id) => <Dish key={id} dishId={id} />)
        )}
      </ul>
    </div>
  );
};
