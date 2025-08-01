import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import TubeTorusVortex from './TubeTorusVortex';
import surfinImage from '../assets/surfin.png';
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
          <h1>20 Years of Cosmic Creativity</h1>
          <p>The works of Lawrence Mayles and Lance Smith, a co-creative collaboration of art and spirit</p>
        </div>
      </section>

      {/* The Angel's Apprentice Section */}
      <section className="section angels-apprentice-section">
        <div className="container">
          <div className="project-preview">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder"><a href="https://www.theangelsapprentice.com/"><img src="./assets/angels.png" alt="Caretakers of Paradise" /></a></div>
            </div>
            <div className="project-info">
              <h2>The Angel's Apprentice</h2>
              <p>The Angel's Apprentice is a sacred journey of awakening and transformation. A book of blessings and a door to the divine. In AudioBoook format as well as in youtube video format. Here we also feature The Conversations with a Bowl of Cereal Series, available for sale on Amazon.</p>
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
              <p>A podcast and multimedia journey exploring topics such as consciousness, deep ecology, druidry, story telling and more.</p>
              <div className="platform-links">
                <a href="https://www.caretakersofparadise.com/" className="btn">Learn More</a>
              </div>
            </div>
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder"><a href="https://www.caretakersofparadise.com/"><img src="./assets/caretakers.png" alt="Caretakers of Paradise" /></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Collaboration Section */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <h2>The Co-Creative Journey</h2>
            <p>Lawrence Mayles and Lance Smith have been exploring the intersection of art, spirituality, and collaborative creation for over twenty years. Their work spans multiple mediums, from podcasting and video production to literary works.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;