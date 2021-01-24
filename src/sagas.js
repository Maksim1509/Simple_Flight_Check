import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import flightDataParse from './utils/flightDataParse';

export const fetchFlight = async (date) => {
  const options = {
    method: 'GET',
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date}`,
    headers: {
      'x-rapidapi-key': '7149fcee36mshfd5072c79c53c61p166d2cjsn94be9257dbcd',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    },
  };

  const res = await axios.request(options);
  console.log(res);
  return res;
};

function* requestFlights({ payload }) {
  try {
    const { data } = yield call(fetchFlight, payload.date);
    const parsedData = flightDataParse(data);
    yield put({ type: 'flights/updateFlights', payload: { data: parsedData } });
  } catch(e) {
    yield put({ type: 'flights/updateFlights', flightsList: 'error' });;
  }
};

function* mySaga() {
  yield takeEvery('flights/requestFlights', requestFlights);
};

export default mySaga;
