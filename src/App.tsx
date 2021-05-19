import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './interfaces/store';
import Login from './pages/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Loader from './components/loader';
import AuthActions from './actions/auth';

function App() {
  const {checkUser} = new AuthActions();
  const dispatch = useDispatch();
  const store = useSelector<AppState, AppState>((AppState) => AppState);
  const isLoggedIn = store.auth.user === null ? null : store.auth.user ? true : false;
  useEffect(() => {
    dispatch(checkUser())
  }, [])
  const component = isLoggedIn === null ? Loader : isLoggedIn ? Home : Login;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={component}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
