import { useState } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import { restaurants } from '../../../mock.js';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  return (
    <section>
      <RestaurantTabs
        restaurants={restaurants}
        restaurantId={restaurantId}
        setRestaurantId={setRestaurantId}
      />
      {restaurant && <Restaurant data={restaurant} />}
    </section>
  );
};
