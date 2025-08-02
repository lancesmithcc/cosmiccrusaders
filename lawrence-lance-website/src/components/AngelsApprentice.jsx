import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AngelsApprentice.css';

const AngelsApprentice = () => {
  return (
    <div className="angels-apprentice">
      <section className="hero-section">
        <div className="container">
          <h1>The Angel's Apprentice</h1>
          <p>A literary exploration of spiritual awakening through the lens of creative partnership and mystical experience.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="book-showcase">
            <div className="book">
              <div className="book-cover">Book Cover</div>
              <h2>The Angel's Apprentice</h2>
              <p className="book-description">A transformative journey through the mystical realms of creative consciousness.</p>
              <div className="book-links">
                <a href="#" className="btn">Read Excerpts</a>
                <a href="#" className="btn">Audiobook</a>
                <a href="#" className="btn">Purchase</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section community-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Connect with fellow readers and explorers of consciousness in our dedicated Facebook group.</p>
          <a href="#" className="btn">Join Facebook Group</a>
        </div>
      </section>

      <section className="section author-spotlight">
        <div className="container">
          <h2>Author Spotlight: Lawrence Mayles</h2>
          <div className="author-content">
            <div className="author-image">Author Image</div>
            <div className="author-bio">
              <p>Lawrence Mayles is a visionary author, spiritual teacher, and creative catalyst whose work bridges the worlds of mysticism and artistic expression. With over two decades of experience in consciousness exploration, Lawrence brings a unique perspective to the written word.</p>
              <p>His approach to writing is deeply rooted in the belief that creativity is a sacred act of co-creation with the universe itself. Through his work, he invites readers to discover their own inner angelic nature and embrace the role of apprentice to the divine creative force.</p>
              
              <div className="social-links">
                <a href="https://www.facebook.com/conversationswithabowlofcereal" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://open.spotify.com/show/0iJr6ttoPFAL19ByHYcukS" target="_blank" rel="noopener noreferrer" className="social-link spotify">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a href="https://www.youtube.com/@TheAngelsApprentice" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
              
              <div className="social-links" style={{ justifyContent: 'center', marginTop: '20px' }}>
                <a href="https://www.facebook.com/conversationswithabowlofcereal" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://open.spotify.com/show/0iJr6ttoPFAL19ByHYcukS" target="_blank" rel="noopener noreferrer" className="social-link spotify">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@TheAngelsApprentice" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              <Link to="/about" className="btn" style={{ display: 'block', margin: '30px auto 0', width: 'fit-content' }}>Learn More About Lawrence</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngelsApprentice;