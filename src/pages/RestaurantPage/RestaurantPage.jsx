import { useState } from 'react';
import { useGetRestaurantsQuery } from '../../redux/services/api.js';
import { Layout } from '../../components/Layout/Layout.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import styles from './styles.module.scss';
import { RestaurantMenu } from '../../components/RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from '../../components/RestaurantReviews/RestaurantReviews.jsx';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  const { isLoading } = useGetRestaurantsQuery();

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className={styles.root}>
          <RestaurantTabs tabId={restaurantId} onSelect={setRestaurantId} />
          {restaurantId && (
            <>
              <RestaurantMenu restaurantId={restaurantId} />
              <RestaurantReviews restaurantId={restaurantId} />
            </>
          )}
        </section>
      )}
    </Layout>
  );
};
