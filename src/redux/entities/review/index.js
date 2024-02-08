import { createSlice } from '@reduxjs/toolkit';
import { getSliceEntities } from '../../../utils/getSliceEntities.js';
import { normalizedReviews } from '../../../constants/normalized-mock.js';
import { getSliceIds } from '../../../utils/getSliceIds.js';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: getSliceEntities(normalizedReviews),
    ids: getSliceIds(normalizedReviews),
  },
});
