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
              <Link to="/about" className="btn">Learn More About Lawrence</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngelsApprentice;