import styles from './styles.module.scss';
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext.jsx';

export const RestaurantReviews = ({ reviews }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.text}
          </li>
        ))}
      </ul>
      {user.name && <ReviewForm userName={user.name} />}
    </div>
  );
};
