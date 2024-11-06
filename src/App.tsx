import React from 'react';
import Header from './features/mainpage/components/Header';
import About from './features/mainpage/components/About';
import Skills from './features/mainpage/components/skills/Skills';
import Experience from './features/mainpage/components/experience/Experience';
import Projects from './features/mainpage/components/projects/Projects';
import Education from './features/mainpage/components/education/Education';
import Contact from './features/mainpage/components/Contact';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './features/mainpage/MainPage';
import BlogPage from './features/blog/BlogPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={MainPage} path='/'></Route>
        <Route Component={BlogPage} path='/blog'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
