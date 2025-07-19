import React from 'react';
import PropTypes from 'prop-types';
import './IndivProject.css';

const IndivProject = ({ 
  title, 
  description, 
  techStack, 
  image, 
  device, 
  links 
}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={image} 
          alt={title} 
          className={`project-image ${device}`}
        />
      </div>
      
      <div className="project-content">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        {links && links.length > 0 && (
          <div className="project-links">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

IndivProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  device: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

IndivProject.defaultProps = {
  device: 'laptop',
  links: [],
};

export default IndivProject;