import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import TubeTorusVortex from './TubeTorusVortex';
import surfinImage from '../assets/surfin.png';
import angelsImage from '../assets/angels.png';
import caretakersImage from '../assets/caretakers.png';
import journeyAudio from '../assets/Journey.mp3';
import '../styles/Home.css';

const Home = () => {
  const audioRef = useRef(null);

  const playJourney = () => {
    if (audioRef.current) {
      // If audio is already playing, pause it
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      } else {
        // Play the audio
        audioRef.current.play().catch(error => {
          console.log('Error playing audio:', error);
        });
      }
    }
  };

  return (
    <div className="home">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={journeyAudio} />
      
      {/* Hero Section with 3D Animation */}
      <section className="hero">
        <TubeTorusVortex />
        <div className="hero-content">
          <img 
            src={surfinImage} 
            alt="Cosmic Crusaders" 
            onClick={playJourney}
            style={{ cursor: 'pointer' }}
          />
          <h1>20 Years + of <br />Cosmic Creativity</h1>
          <p>What happens when an author and creative director spend 20+ years exploring the mysteries of consciousness? You get "contraband consciousness" - art that awakens, stories that transform, and conversations that shatter ordinary perception.</p>
        </div>
      </section>

      {/* The Angel's Apprentice Section */}
      <section className="section angels-apprentice-section">
        <div className="container">
          <div className="project-preview">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder">
                <a href="https://www.theangelsapprentice.com/"><img src={angelsImage} alt="The Angel's Apprentice" /></a>
              </div>
            </div>
            <div className="project-info">
              <h2>The Angel's Apprentice</h2>
              <p>Enter a realm where words become gateways to the divine. Lawrence's visionary work isn't just a book - it's a sacred journey. Experience it through print, audiobook, or cinematic YouTube productions. Plus: the mind-bending "Conversations with a Bowl of Cereal" series that transforms the mundane into the mystical.</p>
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
              <div className="platform-links">
                <a href="https://www.theangelsapprentice.com/" className="btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caretakers of Paradise Section */}
      <section className="section">
        <div className="container">
          <div className="project-preview">
            <div className="project-info">
              <h2>Caretakers of Paradise</h2>
              <p>Deep, unfiltered explorations of consciousness, druidry, ecology, and the stories that shape reality. We venture into territories where conventional wisdom fears to tread.</p>
              <div className="social-links">
              <a href="https://open.spotify.com/show/2sxsnqpwmwDKj25PQS973q" target="_blank" rel="noopener noreferrer" className="social-link spotify">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a href="https://www.instagram.com/caretakersofparadise" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.youtube.com/@TheCareTakersofParadise/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
              <div className="platform-links">
                <a href="https://www.caretakersofparadise.com/" className="btn">Learn More</a>
              </div>
            </div>
            <div className="project-image">
              {/* Placeholder for project image */}
                <div className="image-placeholder"><a href="https://www.caretakersofparadise.com/">
                <img src={caretakersImage} alt="Caretakers of Paradise" /></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Collaboration Section */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <h2>Twenty Years of Mystical Multimedia</h2>
            <p>
Lawrence Mayles and Lance Smith have spent over two decades creating at the intersection of storytelling, art and spirituality. Their collaboration spans multiple formats: Lawrence's published book The Angel's Apprentice and the Conversations with a Bowl of Cereal Series, their Caretakers of Paradise podcast, and various video productions.
Their work blends poetry with mystical themes, creating what they call "contraband consciousness." Through literature, podcasting, and multimedia projects, they explore transcendence and spiritual awakening using unconventional artistic language and sacred imagery.
The duo positions themselves as guides for consciousness exploration, offering audiences a unique fusion of urban poetry and spiritual wisdom across their various creative platforms.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;