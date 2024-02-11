import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/index.js';
import styles from '../RestaurantMenu/styles.module.scss';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  return (
    <div className={styles.dishWrapper}>
      <li>{review.text}</li>
    </div>
  );
};
