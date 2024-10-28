import React from 'react';
import ExperienceEntry from './ExperienceEntry';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Horizontes Informatica, S.L.",
      startDate: new Date(2024, 4, 1), // May 1, 2024
      endDate: null, // Present
      details: [
        "Web application development using Spring and React",
        "Full-stack development responsibilities"
      ]
    },
    {
      title: "Software Developer",
      company: "Horizontes Informatica, S.L.",
      startDate: new Date(2024, 0, 1), // January 1, 2024
      endDate: new Date(2024, 4, 1), // May 1, 2024
      details: [
        "Initial role in software development",
        "Web application development"
      ]
    }
  ];

  const calculateTotalExperience = () => {
    const now = new Date();
    const totalMonths = experiences.reduce((total, exp) => {
      const start = exp.startDate;
      const end = exp.endDate || now;
      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      return total + months;
    }, 0);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${months} months`;
    } else {
      return `${years} years ${months} months`;
    }
  };

  return (
    <section className="section experience-section">
      <h2>Experience      <span style={{
        marginLeft: '10px',
        fontSize: '0.8em',
        color: '#888',
        fontWeight: 'normal'
      }}>   {calculateTotalExperience()} </span></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceEntry key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
