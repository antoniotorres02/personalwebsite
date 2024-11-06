import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import LinkToRepository from './components/LinkToRepository'

export default function MainPage() {
  return (
    
    <div className="container">
      <Header />
      <LinkToRepository/>
      {/*<About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      */}
      {/*
      TODO: Bind the Contact component to my mail server and send the form data to my email
      <Contact />
      */} 
    </div>
  )
}
