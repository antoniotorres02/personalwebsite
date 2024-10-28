import React from 'react';
import { ProjectEntry } from './ProjectEntry';

export interface ProjectEntryInterface {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  githubLink: string;
  projectLink?: string;
  image?: string;
}

const projectsData: ProjectEntryInterface[] = [
  {
    title: "AI-based Invoice Data Recognition System",
    description: "Final Degree Project (Grade: 9.6/10)",
    technologies: ["Python", "PyTorch", "Keras"],
    details: [
      "Independently developed an AI system for invoice data recognition",
      "Implemented machine learning models using PyTorch and Keras",
      "Achieved excellent results, receiving a near-perfect grade"
    ],
    githubLink: "https://github.com/yourusername/invoice-recognition",
    projectLink: "https://invoice-recognition-demo.example.com",
    image: "/images/invoice-recognition-demo.jpg"
  },
  // ... Add more project entries here ...
];

const Projects: React.FC = () => {
  return (
    <section className="section projects-section">
      <h2>Featured Projects</h2>
      {projectsData.map((project, index) => (
        <ProjectEntry key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;
