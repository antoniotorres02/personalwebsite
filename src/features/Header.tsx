import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="profile">
        <img src="/assets/Torres Bordón, Antonio Javier_2.png" alt="Antonio Torres" className="profile-image" />
        <h1>Antonio Javier Torres Bordón</h1>
        <p className="title">Software Engineer</p>
        <div className="contact-info">
          <p><a href="mailto:contact@antoniotorres.dev"><FontAwesomeIcon icon={faEnvelope} /> contact@antoniotorres.dev</a></p>
          <p><a href="tel:+34662956636"><FontAwesomeIcon icon={faPhone} /> +34 662 95 66 36</a></p>
          <p><a href="https://github.com/antoniotorres02" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> github.com/antoniotorres02</a></p>
          <p><a href="https://www.linkedin.com/in/antoniotorres02" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/antoniotorres02</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
