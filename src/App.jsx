import { useState } from 'react';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { store } from './redux/index.js';
import { AuthContext } from './contexts/authContext.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { AboutUs } from './pages/AboutUs/AboutUs.jsx';
import { Restaurant } from './components/Restaurant/Restaurant.jsx';
import { RestaurantMenu } from './components/RestaurantMenu/RestaurantMenu.jsx';
import { RestaurantReviews } from './components/RestaurantReviews/RestaurantReviews.jsx';
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx';
import { Dish } from './components/Dish/Dish.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'restaurants',
        element: <RestaurantPage />,
        children: [
          { index: true, element: <h2>Select restaurant</h2> },
          {
            path: ':restaurantId',
            element: <Restaurant />,
            children: [
              { index: true, element: <Navigate to="menu" replace /> },
              { path: 'menu', element: <RestaurantMenu /> },
              { path: 'reviews', element: <RestaurantReviews /> },
            ],
          },
        ],
      },
      { path: 'dish/:dishId', element: <Dish /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

export const App = () => {
  const [user, setUser] = useState(undefined);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </Provider>
  );
};
