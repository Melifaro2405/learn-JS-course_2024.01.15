import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, { payload: dishId }) => {
      state[dishId] = (state[dishId] || 0) + 1;
    },
    decrement: (state, { payload: dishId }) => {
      state[dishId] = (state[dishId] || 0) - 1;

      if (state[dishId] < 1) {
        delete state[dishId];
      }
    },
  },
  selectors: {
    selectDishAmountById: (state, dishId) => {
      return state[dishId] || 0;
    },
    selectDishAmount: (state) =>
      Object.values(state).reduce((acc, amount) => {
        return acc + amount;
      }, 0),
  },
});

export const { selectDishAmountById, selectDishAmount, selectCartDishIds } =
  cartSlice.selectors;

export const { increment, decrement } = cartSlice.actions;
