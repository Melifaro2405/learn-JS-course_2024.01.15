import { useState } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import { restaurants } from '../../../mock.js';
import styles from './styles.module.scss';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  return (
    <section className={styles.root}>
      <RestaurantTabs
        restaurants={restaurants}
        restaurantId={restaurantId}
        setRestaurantId={setRestaurantId}
      />
      {restaurant && <Restaurant data={restaurant} />}
    </section>
  );
};
