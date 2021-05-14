import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import io, { Socket } from 'socket.io-client'
import DataActions from './actions/data';
import Login from './pages/login';

function App() {
  const {getTodos} = new DataActions();
  const dispatch = useDispatch();
  const store = useSelector((AppState) => AppState);
  const [state, setSate] = useState({
    io: {} as Socket,
  });
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  console.log(store)
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
