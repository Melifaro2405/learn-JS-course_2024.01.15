import { Layout } from './components/Layout/Layout.jsx';
import { restaurants } from '../mock.js';
import { Restaurant } from './components/Restaurant/Restaurant.jsx';

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.name} restaurant={restaurant} />
      ))}
    </Layout>
  );
};
