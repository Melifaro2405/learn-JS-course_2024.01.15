import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';

export const IncDecCount = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const increaseCount = () => {
    if (count < 5) setCount(count + 1);
  };

  return (
    <div className={styles.root}>
      <Button className={styles.button} onClick={decreaseCount} disabled={count === 0}>
        -
      </Button>
      <p className={styles.count}>{count}</p>
      <Button className={styles.button} onClick={increaseCount} disabled={count === 5}>
        +
      </Button>
    </div>
  );
};
