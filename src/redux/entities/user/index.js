import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks/get-users.js';

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectUserIds, selectUserById } = userSlice.selectors;
