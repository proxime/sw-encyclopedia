import React from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

import './styles/Main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
