import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import './index.scss';
import reducer from './slices';
import App from './App';
import dateParse from './utils/dateParse';

const preloadedState = {
  auth: {
    isAuth: false,
  },
  dateInfo: {
    date: dateParse(new Date()),
  },
  flightsInfo: {
    flightList: [],
    date: null,
  },
  favoritesInfo: {
    favoriteIds: [],
  },
};

const sagaMiddleware = createSagaMiddleware();

const runApp = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState,
  });

  sagaMiddleware.run(mySaga);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

export default runApp;
