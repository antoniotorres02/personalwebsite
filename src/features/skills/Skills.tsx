import React from 'react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: "Technical Skills",
      skills: [
        "Spring Framework",
        "React.js",
        "Python",
        "PyTorch / Keras",
        "Machine Learning"
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        "Leadership",
        "Problem Solving",
        "Communication",
        "Web Development",
        "AI/ML Development"
      ]
    },
    {
      title: "Areas of Interest",
      skills: [
        "Low-level Programming",
        "Machine Learning",
        "Business & Entrepreneurship",
        "Software Architecture"
      ]
    }
  ];

  return (
    <section className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillCard, index) => (
          <SkillCard key={index} {...skillCard} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
