import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content"> 
          <h1>WE ARE THE CARETAKERS OF PARADISE</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;