export const RestReviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
