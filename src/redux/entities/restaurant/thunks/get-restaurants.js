import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../index.js';

export const getRestaurants = createAsyncThunk(
  'restaurant/getDishes',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants/');

    return response.json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState()).length,
  }
);
