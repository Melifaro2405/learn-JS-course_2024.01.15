import { Tab } from '../Tab/Tab.jsx';
import { useGetRestaurantsQuery } from '../../redux/services/api.js';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ tabId, onSelect }) => {
  const { data: restaurants } = useGetRestaurantsQuery();

  return (
    <div className={styles.root}>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          isActiveTab={tabId === id}
          title={name}
          onClick={() => onSelect(id)}
        />
      ))}
    </div>
  );
};
