import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './thunks/get-dishes-by-restaurantId.js';

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    }),
});

export const { selectDishIds, selectDishById } = dishSlice.selectors;
