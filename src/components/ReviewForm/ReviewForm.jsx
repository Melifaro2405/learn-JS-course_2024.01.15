import { useCreateReviewMutation } from '../../redux/services/api.js';
import styles from './styles.module.scss';
import { Button } from '../Button/Button.jsx';
import { useForm } from '../../hooks/useForm.js';

export const ReviewForm = ({ restaurantId }) => {
  const { form, setName, setText, setRating, clearForm } = useForm();

  const [createReview, { isLoading: isLoadingCreateReview }] =
    useCreateReviewMutation();

  const createNewReview = async () => {
    await createReview({ restaurantId, newReview: form });
    clearForm();
  };

  const disabledCreateReviews = Object.values(form).some((value) => !value);

  return (
    <div className={styles.root}>
      <h3>Review Form</h3>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="name" value={form.name} onChange={setName} />
        </div>

        <div className={styles.field}>
          <label htmlFor="text">Text:</label>
          <input id="text" type="text" value={form.text} onChange={setText} />
        </div>

        <div className={styles.field}>
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            value={form.rating}
            onChange={setRating}
          />
        </div>
      </form>
      {isLoadingCreateReview ? (
        <div>Loading...</div>
      ) : (
        <Button disabled={disabledCreateReviews} onClick={createNewReview}>
          Create review
        </Button>
      )}
    </div>
  );
};
