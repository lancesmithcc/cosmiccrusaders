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
              <p>Step into a realm where words become gateways to the divine. Lawrence's visionary work isn't just a book - it's a sacred journey. Experience it through print, audiobook, or cinematic YouTube productions. Plus: the mind-bending "Conversations with a Bowl of Cereal" series that transforms the mundane into the mystical.</p>
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