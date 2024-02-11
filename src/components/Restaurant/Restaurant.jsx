import { useSelector } from 'react-redux';
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews.jsx';
import { selectRestaurantById } from '../../redux/entities/restaurant/index.js';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  const { menu, reviews } = restaurant;

  return (
    <>
      <RestaurantMenu menuIds={menu} />
      <RestaurantReviews reviewIds={reviews} />
    </>
  );
};
