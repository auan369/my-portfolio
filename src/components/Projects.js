import React from 'react';
import './Projects.css';
import IndivProject from './IndivProject';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h3>Projects</h3>
            <div className="projects-intro">
                {portfolioData.projects.map((project) => (
                    <IndivProject key={project.id} {...project} />
                ))}
            </div>
        </section>

    );
};
export default Projects;