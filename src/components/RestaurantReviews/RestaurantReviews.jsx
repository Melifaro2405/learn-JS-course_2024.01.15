import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';
import { Review } from '../Review/Review.jsx';
import { useGetReviewsQuery } from '../../redux/services/api.js';
import styles from './styles.module.scss';

export const RestaurantReviews = ({ restaurantId }) => {
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {isFetching ? (
          <div>Loading reviews...</div>
        ) : (
          reviews.map((review) => <Review key={review.id} review={review} />)
        )}
      </ul>
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
