import { Button } from '../Button/Button.jsx';
import styles from '../RestaurantMenu/styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { DishCounter } from '../DishCounter/DishCounter.jsx';
import { useGetDishQuery } from '../../redux/services/api.js';

export const Dish = ({ isCart, id }) => {
  const navigation = useNavigate();
  const params = useParams();

  const dishId = isCart ? id : params?.dishId;

  const { data: dish, isLoading } = useGetDishQuery(dishId);

  const backToMenu = () => navigation(-1);

  if (isLoading) return <p>...loading dish</p>;

  return (
    <div className={styles.dishWrapper}>
      {!isCart && (
        <Button onClick={backToMenu} className={styles.backButton}>
          Back to menu
        </Button>
      )}
      <div>
        <div className={classNames({ [styles.dishInfoInCart]: isCart })}>
          <h2 style={{ whiteSpace: 'nowrap' }}>{dish.name}</h2>
          <p>
            <b>Ingredients:</b> {dish.ingredients.join(', ')}
          </p>
          <p>
            <b>Price:</b> {dish.price}
          </p>
        </div>
      </div>

      <DishCounter dishId={dishId} />
    </div>
  );
};
