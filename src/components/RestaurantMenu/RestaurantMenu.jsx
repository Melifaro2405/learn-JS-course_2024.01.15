import { Link, useParams } from 'react-router-dom';
import { useGetMenuQuery } from '../../redux/services/api.js';
import styles from './styles.module.scss';

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const { data: menu, isFetching } = useGetMenuQuery(restaurantId);

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.menuWrapper}>
        {isFetching ? (
          <div>Loading menu...</div>
        ) : (
          menu.map((dish) => (
            <Link key={dish.id} to={`/dish/${dish.id}`} state={dish}>
              <li>{dish.name}</li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
};
