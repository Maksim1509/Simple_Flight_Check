import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices';
import * as icons from '../components/icons/Icons';
import { toDateString } from '../utils/dateParse';
import prettify from '../utils/prettifyNumber';
import localStore from 'store'; 
import { useEffect } from 'react';


const FlightList = () => {
  const dispatch = useDispatch();
  const { flightList, date } = useSelector((state) => state.flightsInfo);
  const { favoriteIds } = useSelector((state) => state.favoritesInfo);

  useEffect(()=> {
    localStore.set('flightList', flightList);
    localStore.set('flightDate', date);
    localStore.set('favoriteIds', favoriteIds);
  })

  const renderFlightInfo = (props) => {
    const favoriteToggle = (id) => () => {
      if (favoriteIds.includes(id)) {
        dispatch(actions.removeFromFavorites({ id }));
      } else {
        dispatch(actions.addToFavorites({ id }));
      }
    };
    const { carrier, price, date, id } = props;
    return (
      <div className="flight-info">
        <div className="wrap">
          <div className="flight-icon">{icons.iconPlane}</div>
          <div className="flight-route">
            <span>Moscow (SVO){icons.iconArrow}New York City (JFK)</span>
            <div className="flight-date">
              {toDateString(new Date(date))}
              <div className="dash" />
              14:50
              <br/>
              <span className="flight-company">{carrier}</span>
            </div>
          </div>
        </div>
        <div className="flight-price">
          {favoriteIds.includes(id) ?
            <button className="favorite-icon" onClick={favoriteToggle(id)}>
              {icons.iconFavoriteChecked}
            </button>
            :
            <button className="favorite-icon" onClick={favoriteToggle(id)}>
              {icons.iconFavorite}
            </button>}
          <div className="price"><small>Price:</small>{`${prettify(price)} ₽`}</div>
        </div>
        <div className="flight-border"></div>
      </div>
    );
  };

  return (
    <ul className="flights-list">
      {flightList.map((flight) => (
        <li key={flight.id} className="flights-list-item">
          {renderFlightInfo({ ...flight, date })}
        </li>
        ))}
    </ul>
  );
};

export default FlightList;
