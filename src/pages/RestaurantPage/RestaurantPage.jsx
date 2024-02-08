import { useState } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import styles from './styles.module.scss';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  return (
    <section className={styles.root}>
      <RestaurantTabs tabId={restaurantId} onSelect={setRestaurantId} />
      {restaurantId && <Restaurant restaurantId={restaurantId} />}
    </section>
  );
};
