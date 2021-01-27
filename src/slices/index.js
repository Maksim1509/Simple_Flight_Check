import { combineReducers } from '@reduxjs/toolkit';
import auth, { actions as authActions } from './auth';
import dateInfo, { actions as dateActions } from './date';
import flightsInfo, { actions as flightsActions } from './flightsInfo';
import favoritesInfo, { actions as favoritesActions } from './favorites';

export default combineReducers({
  auth,
  dateInfo,
  flightsInfo,
  favoritesInfo,
});

const actions = {
  ...authActions,
  ...dateActions,
  ...flightsActions,
  ...favoritesActions,
};

export { actions };
