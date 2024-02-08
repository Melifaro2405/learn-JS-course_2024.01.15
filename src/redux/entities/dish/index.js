import { createSlice } from '@reduxjs/toolkit';
import { getSliceEntities } from '../../../utils/getSliceEntities.js';
import { normalizedDishes } from '../../../constants/normalized-mock.js';
import { getSliceIds } from '../../../utils/getSliceIds.js';

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: getSliceEntities(normalizedDishes),
    ids: getSliceIds(normalizedDishes),
  },
});
