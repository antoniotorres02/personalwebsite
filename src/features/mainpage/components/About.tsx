import React from 'react';

const About: React.FC = () => {
  return (
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
  );
}

export default About;