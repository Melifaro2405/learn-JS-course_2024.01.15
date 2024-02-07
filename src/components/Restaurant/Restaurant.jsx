import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { menu, reviews } = restaurant;

  return (
    <div key={restaurantId}>
      <RestaurantMenu menuIds={menu} />
      <RestaurantReviews reviewIds={reviews} />
    </div>
  );
};
