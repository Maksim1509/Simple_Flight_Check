import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import localStore from 'store';
import dateParse from '../utils/dateParse';
import * as icons from './icons/Icons';
import { actions } from '../slices';

const Calendar = () => {
  const { date } = useSelector((state) => state.dateInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    localStore.set('date', date);
  });

  const selectDateHandle = (e) => {
    console.log(e.target.value);
    const selectedDate = e.target.value;
    dispatch(actions.setDate({ date: dateParse(new Date(selectedDate)) }));
    dispatch(actions.requestFlights({ date: selectedDate }));
  };

  return (
    <div className="date">
      <div className="date-content">
        <span className="date-text">{date}</span>
        <div className="date-icon">{icons.iconCalendar}</div>
      </div>
      <input className="date-input" type="date" onChange={selectDateHandle} />
    </div>
  );
};

export default Calendar;
