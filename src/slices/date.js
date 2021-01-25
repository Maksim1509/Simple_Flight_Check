/* eslint-disable no-param-reassign */
import { createAction, createSlice } from '@reduxjs/toolkit';
import dateParse from '../utils/dateParse';

const logout = createAction('auth/logout');

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: dateParse(new Date()),
  },
  reducers: {
    setDate: (state, { payload }) => {
      console.log(payload.date);
      state.date = payload.date;
    },
  },
  extraReducers: {
    [logout]: (state) => {
      state.date = dateParse(new Date());
    },
  },
});

export const actions = dateSlice.actions;
export default dateSlice.reducer;