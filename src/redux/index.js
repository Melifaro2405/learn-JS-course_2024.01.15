import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant/index.js';
import { dishSlice } from './entities/dish/index.js';
import { reviewSlice } from './entities/review/index.js';
import { userSlice } from './entities/user/index.js';

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
});
