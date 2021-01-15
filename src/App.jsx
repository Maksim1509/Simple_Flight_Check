import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/main' component={Main} />
      </Switch>
  </BrowserRouter>
)


export default App;
