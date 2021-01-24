import { useDispatch, useSelector } from 'react-redux';
import * as icons from './icons/Icons';
import { actions } from '../slices';
import dateParse from '../utils/dateParse';

const Calendar = () => {
  const { date } = useSelector(state => state.dateInfo);
  const dispatch = useDispatch();
  

  const selectDateHandle = (e) => {
    console.log(e.target.value);
    const date = e.target.value;
    dispatch(actions.setDate({ date: dateParse(new Date(date)) }));
    dispatch(actions.requestFlights({ date }));
  };

  return (
    <div className="date">
      <div className="date-content">
        <span className="date-text">{date}</span> 
        <div className="date-icon">{icons.iconCalendar}</div>
      </div>
      <input className='date-input' type="date" onChange={selectDateHandle} />
    </div>
  )
}

export default Calendar;
