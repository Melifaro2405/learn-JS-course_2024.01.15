import { createSlice } from '@reduxjs/toolkit';
import { getSliceEntities } from '../../../utils/getSliceEntities.js';
import { normalizedRestaurants } from '../../../constants/normalized-mock.js';
import { getSliceIds } from '../../../utils/getSliceIds.js';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: getSliceEntities(normalizedRestaurants),
    ids: getSliceIds(normalizedRestaurants),
  },
});
