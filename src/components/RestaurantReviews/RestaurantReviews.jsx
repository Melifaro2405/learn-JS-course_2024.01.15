import styles from './styles.module.scss';
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authContext.jsx';
import { Review } from '../Review/Review.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/ui/request/index.js';
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/index.js';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurantId.js';

export const RestaurantReviews = ({ restaurantId }) => {
  const { user } = useContext(AuthContext);

  const [requestId, setRequestId] = useState(undefined);
  const isLoading = useSelector(
    (state) => requestId && selectIsLoading(state, requestId)
  );

  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId);
  }, [dispatch, restaurantId]);

  if (!reviewsIds.length) return null;

  if (isLoading) return <div>Loading reviews...</div>;

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds.map((id) => (
          <Review key={id} reviewId={id} />
        ))}
      </ul>
      {user && <ReviewForm />}
    </div>
  );
};
