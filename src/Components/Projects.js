import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Responsive Landing Page</h3>
            <p>A modern landing page built with HTML, CSS, and JavaScript.</p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noreferrer" className="project-link">View Code</a>
          </div>
          <div className="project-card">
            <h3>React Blog Website</h3>
            <p>A blog platform built using React, Node.js, and MongoDB.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noreferrer" className="project-link">View Code</a>
          </div>
          <div className="project-card">
            <h3>JavaScript Game</h3>
            <p>A fun web game developed with vanilla JavaScript and Canvas.</p>
            <a href="https://github.com/yourusername/project3" target="_blank" rel="noreferrer" className="project-link">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

