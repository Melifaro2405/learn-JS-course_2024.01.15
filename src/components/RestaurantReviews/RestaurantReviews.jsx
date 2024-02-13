import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../contexts/authContext.jsx';
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/index.js';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurantId.js';
import { REQUEST_STATUS } from '../../redux/ui/request/constants.js';
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';
import { Review } from '../Review/Review.jsx';
import { useRequest } from '../../hooks/useRequest.js';
import styles from './styles.module.scss';

export const RestaurantReviews = ({ restaurantId }) => {
  const { user } = useContext(AuthContext);

  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );
  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  if (!reviewsIds.length) return null;

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {requestStatus === REQUEST_STATUS.pending ? (
          <div>Loading reviews...</div>
        ) : (
          reviewsIds.map((id) => <Review key={id} reviewId={id} />)
        )}
      </ul>
      {user && <ReviewForm />}
    </div>
  );
};
