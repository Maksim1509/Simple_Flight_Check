/* eslint-disable no-param-reassign */
import { createAction, createSlice } from '@reduxjs/toolkit';

const logout = createAction('auth/logout');

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
  extraReducers: {
    [logout]: (state) => {
      state.flightList = [];
      state.date = null;
    },
  },
});

export const { actions } = flightsSlice;
export default flightsSlice.reducer;
