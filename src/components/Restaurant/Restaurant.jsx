import { useSelector } from 'react-redux';
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews.jsx';
import { selectRestaurantById } from '../../redux/entities/restaurant/index.js';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <RestaurantMenu restaurantId={restaurant.id} />
      <RestaurantReviews restaurantId={restaurant.id} />
    </>
  );
};
