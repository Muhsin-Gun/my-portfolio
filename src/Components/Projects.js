import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Project 1</h3>
            <p className="project-desc">A responsive landing page built with HTML, CSS, Tailwind CSS.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Project 2</h3>
            <p className="project-desc">A blog website using React.</p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Project 3</h3>
            <p className="project-desc">A functional website using JavaScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
