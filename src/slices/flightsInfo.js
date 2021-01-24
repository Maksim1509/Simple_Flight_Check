/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    flightList: [],
    date: null,
  },
  reducers: {
    requestFlights: (state, { payload }) => {
      state.date = payload.date;
    },
    updateFlights: (state, { payload }) => {
      state.flightList = payload.data;
    },
  },
});

export const actions = flightsSlice.actions;
export default flightsSlice.reducer;
