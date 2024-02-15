import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/get-restaurants.js';

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantMenuById: (state, id) =>
      restaurantSlice.getSelectors().selectRestaurantById(state, id)?.menu,
    selectRestaurantReviewsById: (state, id) =>
      restaurantSlice.getSelectors().selectRestaurantById(state, id)?.reviews,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantMenuById,
  selectRestaurantReviewsById,
} = restaurantSlice.selectors;
