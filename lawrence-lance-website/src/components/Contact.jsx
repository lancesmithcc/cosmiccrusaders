import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <h1>Connect With Us</h1>
          <p>We'd love to hear from you and explore potential collaborations</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions about our work or interested in collaborating? Reach out to us through any of the following channels:</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email</h3>
                  <p>contact@lawrencelance.com</p>
                </div>
                
                <div className="contact-method">
                  <h3>Social Media</h3>
                  <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">Spotify</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <h3>Booking & Press</h3>
                  <p>For booking inquiries or press requests, please contact our management team at management@lawrencelance.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;