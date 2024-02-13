import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/index.js';
import styles from '../RestaurantMenu/styles.module.scss';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) return null;

  return (
    <div className={styles.dishWrapper}>
      <li>{review.text}</li>
    </div>
  );
};
