import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectProductAmount } from '../../redux/ui/cart/index.js';
import { Button } from '../Button/Button.jsx';
import { Cart } from '../Cart/Cart.jsx';
import styles from '../Header/styles.module.scss';

export const CartButton = () => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const amount = useSelector(selectProductAmount);

  return (
    <div className={styles.root}>
      <div className={styles.headerContent}>
        <div className={styles.contentWrapper}>Cart amount:</div>
        <Button onClick={() => setIsOpenCartModal(true)}>{amount}</Button>
      </div>
      {isOpenCartModal &&
        createPortal(
          <>
            <div
              className={styles.layout}
              onClick={() => setIsOpenCartModal(false)}
            />
            <div className={styles.modal}>
              <Cart />
            </div>
          </>,
          document.getElementById('cart-modal')
        )}
    </div>
  );
};
