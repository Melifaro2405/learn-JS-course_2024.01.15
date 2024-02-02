import { useState } from 'react';
import { Layout } from './components/Layout/Layout.jsx';
import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage.jsx';
import { AuthContext } from './contexts/authContext.jsx';
import { AuthModal } from './components/AuthModal/AuthModal.jsx';

export const App = () => {
  const [user, setUser] = useState(undefined);
  const [isOpenedAuthModal, setIsOpenedAuthModal] = useState(false);

  const authData = {
    user,
    setUser,
    isOpenedAuthModal,
    setIsOpenedAuthModal,
  };

  return (
    <AuthContext.Provider value={authData}>
      <Layout>
        <RestaurantPage />
      </Layout>
      <AuthModal />
    </AuthContext.Provider>
  );
};
