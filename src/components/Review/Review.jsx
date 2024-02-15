import { useContext, useState } from 'react';
import { useUpdateReviewMutation } from '../../redux/services/api.js';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';
import { AuthContext } from '../../contexts/authContext.jsx';

export const Review = ({ review }) => {
  const { user } = useContext(AuthContext);

  const [isEditReview, setIsEditReview] = useState(false);
  const [reviewText, setReviewText] = useState(review.text);

  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const setText = (evt) => setReviewText(evt.target.value);

  const handleUpdateReview = () => {
    const editedReview = { ...review, text: reviewText };
    updateReview({ review: editedReview });
    setIsEditReview(false);
  };

  return (
    <div className={styles.root}>
      {isEditReview ? (
        <div className={styles.reviewBox}>
          {isLoading ? (
            <span>editing review...</span>
          ) : (
            <input value={reviewText.toString()} onChange={setText} />
          )}
          <Button onClick={() => setIsEditReview(false)}>X</Button>
          <Button onClick={handleUpdateReview}>V</Button>
        </div>
      ) : (
        <li style={{ maxWidth: '75%' }}>{review.text}</li>
      )}
      {user && !isEditReview && (
        <Button onClick={() => setIsEditReview(true)}>Update Review</Button>
      )}
    </div>
  );
};
