import { useState } from 'react';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import { Restaurant } from '../../components/Restaurant/Restaurant.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import { Layout } from '../../components/Layout/Layout.jsx';
import { useRequest } from '../../hooks/useRequest.js';
import styles from './styles.module.scss';
import { REQUEST_STATUS } from '../../redux/ui/request/constants.js';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);

  const requestStatus = useRequest(getRestaurants);

  return (
    <Layout>
      {requestStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <section className={styles.root}>
          <RestaurantTabs tabId={restaurantId} onSelect={setRestaurantId} />
          {restaurantId && <Restaurant restaurantId={restaurantId} />}
        </section>
      )}
    </Layout>
  );
};
