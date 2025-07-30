import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero-section">
        <div className="container">
          <h1>About Our Journey</h1>
          <p>Exploring the mystical intersection of art, spirituality, and collaborative creation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="artist-profiles">
            <div className="artist">
              <div className="artist-image">Lawrence Image</div>
              <h2>Lawrence Mayles</h2>
              <p>Lawrence is a visionary author, spiritual teacher, and creative catalyst whose work bridges the worlds of mysticism and artistic expression.</p>
              <p>With over two decades of experience in consciousness exploration, Lawrence brings a unique perspective to collaborative creation.</p>
            </div>
            
            <div className="artist">
              <div className="artist-image">Lance Image</div>
              <h2>Lance Smith</h2>
              <p>Lance is a multidisciplinary artist, musician, and digital creator who brings technical expertise and creative vision to their collaborative projects.</p>
              <p>His background in media production and digital arts complements Lawrence's spiritual teachings, creating a powerful synergy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section creative-process">
        <div className="container">
          <h2>Our Creative Process</h2>
          <p>Our collaborative process begins with a shared intention to serve something greater than ourselves. We enter into a sacred space of co-creation where ideas flow freely between us, often transcending our individual perspectives.</p>
          <p>Through deep listening, intuitive guidance, and mutual respect, we allow the creative force to move through us, shaping our work in ways that neither of us could achieve alone.</p>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Intention Setting</h3>
              <p>We begin each project by setting a clear intention for what we wish to co-create.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Energy Alignment</h3>
              <p>We align our energies through meditation, music, or other practices that open us to inspiration.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Flow State Creation</h3>
              <p>We enter a state of creative flow where ideas emerge organically and are shaped collaboratively.</p>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Manifestation</h3>
              <p>We bring our co-created vision into tangible form through our respective skills and mediums.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section journey-timeline">
        <div className="container">
          <h2>Our Journey Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2010</div>
              <div className="timeline-content">
                <h3>First Meeting</h3>
                <p>Lawrence and Lance meet at a consciousness exploration workshop, sensing an immediate creative connection.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2012</div>
              <div className="timeline-content">
                <h3>First Collaboration</h3>
                <p>They begin working together on a small multimedia project exploring themes of spiritual awakening.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2015</div>
              <div className="timeline-content">
                <h3>Caretakers of Paradise</h3>
                <p>Launch of their flagship podcast exploring the sacred dimensions of creative collaboration.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h3>The Angel's Apprentice</h3>
                <p>Publication of their first collaborative book, a literary exploration of spiritual awakening.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Expanded Reach</h3>
                <p>Growing audience across multiple platforms with thousands of engaged followers and listeners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Join Our Journey</h2>
            <p>Explore our work and become part of our growing community of conscious creators.</p>
            <div className="cta-buttons">
              <Link to="/caretakers-of-paradise" className="btn">Caretakers of Paradise</Link>
              <Link to="/angels-apprentice" className="btn">The Angel's Apprentice</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;