import React from 'react';

interface ExperienceEntryProps {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  details: string[];
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ title, company, startDate, endDate, details }) => {
  const calculateDuration = (start: Date, end: Date | null) => {
    const now = end || new Date();
    const years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    
    if (months < 0) {
      months += 12;
    }
    
    if (years === 0) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const duration = calculateDuration(startDate, endDate);

  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="date">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
        <span className="duration"> ({duration})</span>
      </p>
      <div className="experience-details">
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceEntry;
