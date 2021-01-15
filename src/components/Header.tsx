import React from 'react';

import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__content">
        <p>&ldquo;May the force</p>
        <p>be with you&rdquo;</p>
      </h1>
    </header>
  );
};

export default Header;
