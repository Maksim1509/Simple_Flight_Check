import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { iconLogout } from '../components/icons/Icons';
import { actions } from '../slices';
import localStore from 'store';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(actions.logout());
    localStore.set('isAuth', false);
    history.push('/');
  }
  return (
    <a className="logout" href="/" onClick={logoutHandler}>
      <span className="logout-text">Выйти</span>
      <div className="logout-icon">{iconLogout}</div>
  </a>
  );  
};

export default Logout;
