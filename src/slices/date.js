/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import dateParse from '../utils/dateParse';

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
});

export const actions = dateSlice.actions;
export default dateSlice.reducer;