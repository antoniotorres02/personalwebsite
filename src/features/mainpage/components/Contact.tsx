import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
