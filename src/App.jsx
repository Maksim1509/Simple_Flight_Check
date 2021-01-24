import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/main' component={Main} />
      </Switch>
    </div> 
  </BrowserRouter>
)


export default App;
