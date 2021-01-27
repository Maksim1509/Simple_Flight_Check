import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import localStore from 'store';

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import './index.scss';
import reducer from './slices';
import App from './App';
import dateParse from './utils/dateParse';

const sagaMiddleware = createSagaMiddleware();

const runApp = () => {
  const isAuth = localStore.get('isAuth') || false;
  const flightList = localStore.get('flightList') || [];
  const date = localStore.get('date') || dateParse(new Date());
  const flightDate = localStore.get('flightDate') || null;
  const favoriteIds = localStore.get('favoriteIds') || [];

  const preloadedState = {
    auth: {
      isAuth,
    },
    dateInfo: {
      date,
    },
    flightsInfo: {
      flightList,
      date: flightDate,
    },
    favoritesInfo: {
      favoriteIds,
    },
  };

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
