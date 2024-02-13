import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './thunks/get-reviews-by-restaurantId.js';

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
      }
    ),
});

export const { selectReviewIds, selectReviewById } = reviewSlice.selectors;
