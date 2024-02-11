import { useEffect, useState } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant.jsx';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import { Layout } from '../../components/Layout/Layout.jsx';
import { selectIsLoading } from '../../redux/ui/request/index.js';

export const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(undefined);
  const [requestId, setRequestId] = useState(undefined);
  const isLoading = useSelector(
    (state) => requestId && selectIsLoading(state, requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getRestaurants()).requestId);
  }, [dispatch]);

  return (
    <Layout>
      {isLoading ? (
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
