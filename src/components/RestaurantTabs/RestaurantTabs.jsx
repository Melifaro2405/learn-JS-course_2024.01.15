import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors.js';
import { Tab } from '../Tab/Tab.jsx';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ tabId, onSelect }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={styles.root}>
      {restaurantIds.map((id) => (
        <Tab
          key={id}
          isActiveTab={tabId === id}
          restaurantId={id}
          onClick={() => onSelect(id)}
        />
      ))}
    </div>
  );
};
