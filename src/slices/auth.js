/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    exit: (state) => {
      state.isAuth = false;
    },
  },
});

export const actions = authSlice.actions;
console.log(actions);
export default authSlice.reducer;
