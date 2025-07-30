import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Cosmic Crusaders</h3>
            <p>20 years of cosmic creativity</p>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lawrence Mayles & Lance Smith. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;