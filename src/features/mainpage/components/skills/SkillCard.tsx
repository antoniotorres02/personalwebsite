import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skill-details">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;