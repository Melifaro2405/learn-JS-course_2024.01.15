import { RestMenu } from '../RestMenu/RestMenu.jsx';
import { RestReviews } from '../RestReviews/RestReviews.jsx';
import { restaurants } from '../../../mock.js';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);

  if (!restaurant) return null;

  const { name, menu, reviews } = restaurant;

  return (
    <div key={name}>
      <RestMenu menu={menu} />
      <RestReviews reviews={reviews} />
    </div>
  );
};
