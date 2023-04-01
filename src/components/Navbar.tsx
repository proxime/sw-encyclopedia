import React from 'react';

import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <h2 className="navbar__title">Star Wars Encyclopedia</h2>
      </div>
    </nav>
  );
};

export default Navbar;
