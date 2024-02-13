import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from './constants.js';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {},
  selectors: {
    selectStatus: (state, id) => state[id] || REQUEST_STATUS.idle,
    selectIsLoading: (state, id) => state[id] === REQUEST_STATUS.pending,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.pending;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.success;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.fail;
        }
      ),
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
