import React from 'react';
import './IndivProject.css';

const IndivProject = ({ title, description, techStack, image, links, device }) => {
    return (
        <div className="project">
            <div className="project-image">
                <div className={device}>
                    <img loading="lazy" src={image} alt={`${title} screenshot`} />
                </div>
            </div>
            <div className="project-details">
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
                <div className="project-tech-stack">
                    <h4>Tech Stack:</h4>
                    <ul>
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                    </ul>
                </div>
                <div className="project-links">
                    {links?(links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <p>
                            {link.icon}
                            {link.label}
                        </p>
                    </a>
                    ))) : null}
                </div>
            </div>
      </div>
    );
}
export default IndivProject;