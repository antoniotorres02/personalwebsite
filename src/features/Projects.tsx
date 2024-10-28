import React from 'react';

const Projects: React.FC = () => {
  return (
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
  );
}

export default Projects;
