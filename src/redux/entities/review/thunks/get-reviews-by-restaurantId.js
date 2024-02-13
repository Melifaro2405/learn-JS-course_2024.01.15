import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewsById } from '../../restaurant/index.js';
import { selectReviewIds } from '../index.js';

export const getReviewsByRestaurantId = createAsyncThunk(
  'review/getReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewsIds = selectRestaurantReviewsById(
        state,
        restaurantId
      );
      const reviewsIds = selectReviewIds(state);

      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    },
  }
);
