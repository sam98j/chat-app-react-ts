import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './interfaces/store';
import Login from './pages/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Loader from './components/loader';
import AuthActions from './apis/auth';
import { AppComponentLocalState } from './interfaces/components/app';

function App() {
  // auth api
  const {checkUser} = new AuthActions();
  // store dispatch method
  const dispatch = useDispatch();
  // auth state, part of whole app state
  const {auth} = useSelector<AppState, AppState>((AppState) => AppState);
  // component local state
  const [state, setState] = useState<AppComponentLocalState>({
    isLoggin: null
  })
  useEffect(() => {
    dispatch(checkUser())
  }, [])
  // component did update
  useEffect(() => {
    setState({
      ...state,
      isLoggin: auth.user === null ? null : auth.user ? true : undefined
    })
  }, [auth.user])
  const component = state.isLoggin === null ? Loader : state.isLoggin ? Home : Login;
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
