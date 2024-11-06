import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './LinkToRepository.css'

export default function LinkToRepository() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://github.com/antoniotorres02/personalwebsite", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className={`github-notification ${isExpanded ? 'expanded' : ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleLinkClick}
    >
      <div className="github-icon">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      { isExpanded &&
      <div className="github-message">
        <span>Check the code on GitHub</span>
        <a href="https://github.com/antoniotorres02/personalwebsite" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
          View Repository
        </a>
      </div>
      }
    </div>
  )
}
