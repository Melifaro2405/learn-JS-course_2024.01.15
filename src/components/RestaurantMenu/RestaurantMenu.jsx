import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';
import { CountWIthButtons } from '../CountWIthButtons/CountWIthButtons.jsx';

export const RestaurantMenu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <div key={id} className={styles.dishWrapper}>
            <li>{name}</li>
            <CountWIthButtons />
          </div>
        ))}
      </ul>
    </div>
  );
};
