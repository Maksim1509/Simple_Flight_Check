/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteIds: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favoriteIds.push(payload.id)
    },
    removeFromFavorites: (state, { payload }) => {
      state.favoriteIds = state.favoriteIds.filter((id) => id !== payload.id);
    },
  },
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;