import classNames from 'classnames';
import styles from './styles.module.scss';

export const RestaurantTabs = ({
  restaurants,
  restaurantId,
  setRestaurantId,
}) => {
  return (
    <div className={styles.root}>
      {restaurants.map(({ id, name }) => (
        <div
          key={id}
          className={classNames(styles.tab, {
            [styles.active]: id === restaurantId,
          })}
          onClick={() => setRestaurantId(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
