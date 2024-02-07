import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index.js';
import { Layout } from './components/Layout/Layout.jsx';
import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage.jsx';
import { AuthContext } from './contexts/authContext.jsx';

export const App = () => {
  const [user, setUser] = useState(undefined);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Layout>
          <RestaurantPage />
        </Layout>
      </AuthContext.Provider>
    </Provider>
  );
};
