import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantMenuById } from '../../restaurant/index.js';
import { selectDishIds } from '../index.js';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);

      return !restaurantDishIds.every((id) => dishIds.includes(id));
    },
  }
);
