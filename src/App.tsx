import React from 'react';
import Header from './features/Header';
import About from './features/About';
import Skills from './features/Skills';
import Experience from './features/Experience/Experience';
import Projects from './features/Projects';
import Education from './features/education/Education';
import Contact from './features/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
