import { ProjectEntryInterface } from "./Projects";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectEntry: React.FC<ProjectEntryInterface> = ({ title, description, technologies, details, githubLink, projectLink, image }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    {image && <img src={image} alt={`${title} demo`} className="project-image" />}
    <div className="project-details">
      <p>Technologies used: {technologies.join(', ')}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
    <div className="project-links">
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        <FontAwesomeIcon icon={faGithub} /> Repository
      </a>
      {projectLink && <a href={projectLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
    </div>
  </div>
);
