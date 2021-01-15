import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserAction } from './store/actions/user';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

import './styles/Main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
