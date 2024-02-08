import { useSelector } from 'react-redux';
import { CountWithButtons } from '../CountWithButtons/CountWithButtons.jsx';
import { selectReviewById } from '../../redux/entities/review/selectors.js';
import styles from '../RestaurantMenu/styles.module.scss';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  return (
    <div className={styles.dishWrapper}>
      <li>{review.text}</li>
      <CountWithButtons />
    </div>
  );
};
