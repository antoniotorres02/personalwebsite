import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header Section */}
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

      {/* About Section */}
      <section className="section about-section">
        <h2>About Me</h2>
        <p className="about-text">
          Hello! I'm Antonio, a Computer Engineer recently graduated from the University of Las Palmas de Gran Canaria. 
          I'm currently working as a web application developer using Spring and React, but my interests are broader, 
          ranging from low-level programming to machine learning, and even business and the entrepreneurial perspective 
          of computer science.
        </p>
        <p className="about-text">
          In recent months, I independently developed an AI-based invoice data recognition system using Python, PyTorch, 
          and Keras as my final degree project, for which I ultimately received a grade of 9.6 out of 10.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <div className="skill-details">
              <ul>
                <li>Spring Framework</li>
                <li>React.js</li>
                <li>Python</li>
                <li>PyTorch / Keras</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
          <div className="skill-card">
            <h3>Core Competencies</h3>
            <div className="skill-details">
              <ul>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Web Development</li>
                <li>AI/ML Development</li>
              </ul>
            </div>
          </div>
          <div className="skill-card">
            <h3>Areas of Interest</h3>
            <div className="skill-details">
              <ul>
                <li>Low-level Programming</li>
                <li>Machine Learning</li>
                <li>Business & Entrepreneurship</li>
                <li>Software Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="experience-card">
            <h3>Software Engineer</h3>
            <p className="company">Horizontes Informatica, S.L.</p>
            <p className="date">May 2024 - Present</p>
            <div className="experience-details">
              <ul>
                <li>Web application development using Spring and React</li>
                <li>Full-stack development responsibilities</li>
              </ul>
            </div>
          </div>
          <div className="experience-card">
            <h3>Software Developer</h3>
            <p className="company">Horizontes Informatica, S.L.</p>
            <p className="date">January 2024 - May 2024</p>
            <div className="experience-details">
              <ul>
                <li>Initial role in software development</li>
                <li>Web application development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <h2>Featured Project</h2>
        <div className="project-card">
          <h3>AI-based Invoice Data Recognition System</h3>
          <p>Final Degree Project (Grade: 9.6/10)</p>
          <div className="project-details">
            <p>Technologies used: Python, PyTorch, Keras</p>
            <ul>
              <li>Independently developed an AI system for invoice data recognition</li>
              <li>Implemented machine learning models using PyTorch and Keras</li>
              <li>Achieved excellent results, receiving a near-perfect grade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <h2>Education</h2>
        <div className="education-card">
          <h3>Computer Engineering Degree</h3>
          <p className="school">
            <img src="/assets/ulpgc.svg" alt="ULPGC Logo" className="university-logo" />
            Universidad de Las Palmas de Gran Canaria
          </p>
          <p className="date">October 2020 - July 2024</p>
        </div>
        <div className="education-card">
          <h3>Computer Engineering (SICUE Exchange)</h3>
          <p className="school">
            <img src="/assets/ugr.svg" alt="UGR Logo" className="university-logo" />
            Universidad de Granada
          </p>
          <p className="date">September 2023 - June 2024</p>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}

export default App;
