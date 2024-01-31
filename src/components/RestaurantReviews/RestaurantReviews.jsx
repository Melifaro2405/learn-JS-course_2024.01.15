import styles from './styles.module.scss';
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';

export const RestaurantReviews = ({ reviews }) => {
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
      <ReviewForm />
    </div>
  );
};
