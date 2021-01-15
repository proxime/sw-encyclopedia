import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../store/actions/user';
import { RootState } from '../store/reducers/index';

import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!user) {
      dispatch(loginAction());
    } else {
      dispatch(logoutAction());
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <h2 className="navbar__title">Star Wars Encyclopedia</h2>
        <button type="button" className="navbar__button" onClick={handleLogin}>
          {user ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
