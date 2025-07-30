import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

const NotFound = () => {
  return (
    <div className="App">
      <Header />
      <main style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link 
          to="/" 
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem'
          }}
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 