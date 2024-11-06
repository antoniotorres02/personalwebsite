import React from 'react';

interface EducationEntryProps {
  degree: string;
  school: string;
  logo: string;
  date: string;
  grade: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, school, logo, date, grade }) => {
  return (
    <div className="education-card">
      <h3>{degree}</h3>
      <p className="school">
        <img src={logo} alt={`${school} Logo`} className="university-logo" />
        {school}
      </p>
      <p className="date">{date}</p>
      <p className="grade">Grade: {grade}</p>
    </div>
  );
}

export default EducationEntry;
