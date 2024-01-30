import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews.jsx';

export const Restaurant = ({ data }) => {
  const { name, menu, reviews } = data;

  return (
    <div key={name}>
      <RestaurantMenu menu={menu} />
      <RestaurantReviews reviews={reviews} />
    </div>
  );
};
