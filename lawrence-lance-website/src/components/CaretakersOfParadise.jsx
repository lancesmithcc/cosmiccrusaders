import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CaretakersOfParadise.css';

const CaretakersOfParadise = () => {
  return (
    <div className="caretakers-of-paradise">
      <section className="hero-section">
        <div className="container">
          <h1>Caretakers of Paradise</h1>
          <p>A podcast and multimedia journey exploring the sacred dimensions of creative collaboration and spiritual awakening.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="platform-showcase">
            <div className="platform">
              <h2>Podcast</h2>
              <p>Listen to our latest episodes on Spotify where we explore the mystical intersection of art and spirituality.</p>
              <a href="#" className="btn">Listen on Spotify</a>
            </div>
            
            <div className="platform">
              <h2>YouTube</h2>
              <p>Watch our visual explorations of creative consciousness and collaborative artistry.</p>
              <a href="#" className="btn">Watch on YouTube</a>
            </div>
            
            <div className="platform">
              <h2>Instagram</h2>
              <p>Follow our daily inspirations, behind-the-scenes moments, and visual musings.</p>
              <a href="#" className="btn">Follow on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section latest-content">
        <div className="container">
          <h2>Latest Episodes</h2>
          <div className="content-grid">
            {/* Placeholder for latest episodes */}
            <div className="content-item">
              <div className="content-image">Episode Image</div>
              <h3>Episode Title</h3>
              <p>Brief description of the episode content and themes explored.</p>
            </div>
            
            <div className="content-item">
              <div className="content-image">Episode Image</div>
              <h3>Episode Title</h3>
              <p>Brief description of the episode content and themes explored.</p>
            </div>
            
            <div className="content-item">
              <div className="content-image">Episode Image</div>
              <h3>Episode Title</h3>
              <p>Brief description of the episode content and themes explored.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-description">
            <h2>About Caretakers of Paradise</h2>
            <p>Caretakers of Paradise is more than just a podcast - it's a multidimensional exploration of what happens when two creative souls align in service of something greater than themselves. Through conversations, meditations, and shared creative expressions, Lawrence and Lance invite listeners into their sacred space of co-creation.</p>
            <p>Each episode is a doorway into the mystical dimensions of artistry, where the boundaries between creator and creation dissolve, revealing the profound truth that we are all caretakers of a paradise that exists within and around us.</p>
            <Link to="/about" className="btn">Learn About Our Journey</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaretakersOfParadise;