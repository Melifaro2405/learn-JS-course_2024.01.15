import { useState } from 'react';
import { restaurants } from '../../../mock.js';
import styles from './styles.module.scss';
import { Restaurant } from '../Restaurant/Restaurant.jsx';
import classNames from 'classnames';

export const RestaurantsTabs = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  const restaurant = restaurantId && restaurants.find((restaurant) => restaurant.id === restaurantId);

  return (
    <>
      <section className={styles.root}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className={classNames(styles.tab, {
              [styles.active]: restaurant.id === restaurantId,
            })}
            onClick={() => setRestaurantId(restaurant.id)}
          >
            {restaurant.name}
          </div>
        ))}
      </section>

      {restaurant && <Restaurant data={restaurant} />}
    </>
  );
};
