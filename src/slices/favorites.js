/* eslint-disable no-param-reassign */
import { createAction, createSlice } from '@reduxjs/toolkit';

const logout = createAction('auth/logout');
const setDate = createAction('date/setDate');
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteIds: [],
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favoriteIds.push(payload.id);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favoriteIds = state.favoriteIds.filter((id) => id !== payload.id);
    },
  },
  extraReducers: {
    [logout]: (state) => {
      state.favoriteIds = [];
    },
    [setDate]: (state) => {
      state.favoriteIds = [];
    },
  },
});

export const { actions } = favoritesSlice;
export default favoritesSlice.reducer;
