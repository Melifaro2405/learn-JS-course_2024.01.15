import { useReducer } from 'react';
import styles from './styles.module.scss';

const initialState = {
  name: '',
  text: '',
  rating: 0,
};

const reducer = (state = initialState, { type, payload }) =>
  ({
    name: { ...state, name: payload },
    text: { ...state, text: payload },
    rating: { ...state, rating: payload },
  })[type] ?? state;

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleChangeName = (evt) => {
    dispatch({ type: 'name', payload: evt.target.value });
  };

  const handleChangeText = (evt) => {
    dispatch({ type: 'text', payload: evt.target.value });
  };

  const handleChangeRating = (evt) => {
    dispatch({ type: 'rating', payload: +evt.target.value });
  };

  return (
    <div className={styles.root}>
      <h3>Review Form</h3>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChangeName}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="text">Text:</label>
          <input
            id="text"
            type="text"
            value={form.text}
            onChange={handleChangeText}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            type="number"
            value={form.rating}
            onChange={handleChangeRating}
          />
        </div>
      </form>
    </div>
  );
};
