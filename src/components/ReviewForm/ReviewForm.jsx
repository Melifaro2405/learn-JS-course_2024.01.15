import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../redux/ui/request/constants.js';
import { getUsers } from '../../redux/entities/user/thunks/get-users.js';
import { selectUserById } from '../../redux/entities/user/index.js';
import { useRequest } from '../../hooks/useRequest.js';
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

  const requestStatus = useRequest(getUsers);

  const user = useSelector((state) =>
    selectUserById(state, 'a304959a-76c0-4b34-954a-b38dbf310360')
  );

  const handleChangeText = (evt) => {
    dispatch({ type: 'text', payload: evt.target.value });
  };

  const handleChangeRating = (evt) => {
    dispatch({ type: 'rating', payload: +evt.target.value });
  };

  if (requestStatus === REQUEST_STATUS.pending)
    return <div>Loading users...</div>;

  return (
    <div className={styles.root}>
      <h3>Review Form</h3>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name:</label>
          <span>{user?.name}</span>
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
