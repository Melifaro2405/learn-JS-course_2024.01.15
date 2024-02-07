import { createSlice } from '@reduxjs/toolkit';
import { getSliceEntities } from '../../../utils/getSliceEntities.js';
import { normalizedUsers } from '../../../constants/normalized-mock.js';
import { getSliceIds } from '../../../utils/getSliceIds.js';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: getSliceEntities(normalizedUsers),
    ids: getSliceIds(normalizedUsers),
  },
});
