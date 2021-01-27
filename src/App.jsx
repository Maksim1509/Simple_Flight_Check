import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const renderPrivate = (isAuth, children) => ({ location }) => (
  isAuth ? children : (<Redirect to={{ pathname: '/', state: { from: location } }} />)
);

const PrivateRoute = (props) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { children } = props;
  return (
    <Route
      render={renderPrivate(isAuth, children)}
    />
  );
};

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute>
          <Main />
        </PrivateRoute>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
