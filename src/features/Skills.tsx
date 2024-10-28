import React from 'react';

const Skills: React.FC = () => {
  return (
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
  );
}

export default Skills;
