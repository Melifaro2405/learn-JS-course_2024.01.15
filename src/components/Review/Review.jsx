import { useState } from 'react';
import {
  useGetUsersQuery,
  useUpdateReviewMutation,
} from '../../redux/services/api.js';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';

export const Review = ({ review }) => {
  const [isEditReview, setIsEditReview] = useState(false);
  const [reviewText, setReviewText] = useState(review.text);

  const [updateReview, { isLoading: isLoadingReview }] =
    useUpdateReviewMutation();

  const setText = (evt) => setReviewText(evt.target.value);

  const handleUpdateReview = () => {
    const editedReview = { ...review, text: reviewText };
    updateReview({ review: editedReview });
    setIsEditReview(false);
  };

  const { data: user, isLoading: isLoadingUsers } = useGetUsersQuery(
    undefined,
    {
      selectFromResult: (result) => ({
        ...result,
        data: result?.data?.find(({ id }) => id === review.userId),
      }),
    }
  );

  if (isLoadingUsers && isLoadingReview) return <span>...loading</span>;

  return (
    <div className={styles.root}>
      {isEditReview ? (
        <div className={styles.reviewBox}>
          {isLoadingReview ? (
            <span>editing review...</span>
          ) : (
            <input value={reviewText.toString()} onChange={setText} />
          )}
          <Button onClick={() => setIsEditReview(false)}>X</Button>
          <Button onClick={handleUpdateReview}>V</Button>
        </div>
      ) : isLoadingUsers ? (
        <span>...loading</span>
      ) : (
        <li style={{ maxWidth: '75%' }}>
          <div>User: {user?.name}</div>
          <div>Text: {review.text}</div>
          <div>Rating: {review.rating}</div>
        </li>
      )}
      {user && !isEditReview && (
        <Button onClick={() => setIsEditReview(true)}>Update Review</Button>
      )}
    </div>
  );
};
