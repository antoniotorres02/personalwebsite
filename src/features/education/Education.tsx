import React from 'react';
import EducationEntry from './EducationEntry';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Computer Engineering Degree",
      school: "Universidad de Las Palmas de Gran Canaria",
      logo: "/assets/ulpgc.svg",
      date: "October 2020 - July 2024",
      grade: "8,321/10"
    },
    {
      degree: "Computer Engineering (SICUE Exchange)",
      school: "Universidad de Granada",
      logo: "/assets/ugr.svg",
      date: "September 2023 - June 2024",
      grade: "9,138/10"
    }
  ];

  return (
    <section className="section education-section">
      <h2>Education</h2>
      {educationData.map((entry, index) => (
        <EducationEntry key={index} {...entry} />
      ))}
    </section>
  );
}

export default Education;
