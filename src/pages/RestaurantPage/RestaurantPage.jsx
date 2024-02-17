import { Outlet } from 'react-router-dom';
import { useGetRestaurantsQuery } from '../../redux/services/api.js';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs.jsx';
import styles from './styles.module.scss';

export const RestaurantPage = () => {
  const { isLoading } = useGetRestaurantsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className={styles.root}>
      <RestaurantTabs />
      <Outlet />
    </section>
  );
};
