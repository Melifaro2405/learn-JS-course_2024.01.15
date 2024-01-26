import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';
import { IncDecCount } from '../IncDecCount/IncDecCount.jsx';

export const RestMenu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <div key={id} className={styles.dishWrapper}>
            <li>{name}</li>
            <IncDecCount />
          </div>
        ))}
      </ul>
    </div>
  );
};
