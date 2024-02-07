import styles from './styles.module.scss';
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext.jsx';
import { Review } from '../Review/Review.jsx';

export const RestaurantReviews = ({ reviewIds }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((id) => (
          <Review key={id} reviewId={id} />
        ))}
      </ul>
      {user?.name && <ReviewForm userName={user.name} />}
    </div>
  );
};
