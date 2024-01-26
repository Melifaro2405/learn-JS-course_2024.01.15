import styles from './styles.module.scss';

export const RestReviews = ({ reviews }) => {
  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
