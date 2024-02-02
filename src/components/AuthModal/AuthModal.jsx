import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { AuthContext } from '../../contexts/authContext.jsx';
import { Button } from '../Button/Button.jsx';
import styles from './styles.module.scss';

const ModalContent = () => {
  const [authData, setAuthData] = useState({});
  const { setIsOpenedAuthModal, setUser } = useContext(AuthContext);

  const handleChangeName = (evt) => {
    setAuthData({ ...authData, name: evt.target.value });
  };

  const handleChangeEmail = (evt) => {
    setAuthData({ ...authData, email: evt.target.value });
  };

  const handleConfirmLogin = () => {
    setUser(authData);
    setIsOpenedAuthModal(false);
  };

  const handleCancelLogin = () => {
    setIsOpenedAuthModal(false);
  };

  const disabled = !authData.name || !authData.email;

  return (
    <div className={styles.root}>
      <h4>Authorization:</h4>
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="enter name"
          value={authData?.name || ''}
          onChange={handleChangeName}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="enter email"
          value={authData?.email || ''}
          onChange={handleChangeEmail}
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleConfirmLogin} disabled={disabled}>
          Confirm
        </Button>
        <Button onClick={handleCancelLogin}>Cancel</Button>
      </div>
    </div>
  );
};

export const AuthModal = () => {
  const { isOpenedAuthModal } = useContext(AuthContext);

  const portal = document.getElementById('portal');

  if (!isOpenedAuthModal) return null;

  return createPortal(<ModalContent />, portal);
};
