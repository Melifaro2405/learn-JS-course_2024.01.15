import { RestMenu } from '../RestMenu/RestMenu.jsx';
import { RestReviews } from '../RestReviews/RestReviews.jsx';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div key={name}>
      <h2>{name}</h2>
      <RestMenu menuItems={menu} />
      <RestReviews reviews={reviews} />
    </div>
  );
};
