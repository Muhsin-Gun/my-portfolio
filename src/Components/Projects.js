import React from 'react';

/*
  Projects:
  - 3 realistic projects: Events (React+Node), Responsive Site, Blog
  - No images (you asked), just clear descriptions + 'View Code' links
  - Card hover: lift + glow
*/
const Projects = () => {
  const projects = [
    {
      title: 'Events Platform (React + Node)',
      desc:
        'A basic events manager with frontend in React and a Node/Express API. Features: create events, view list, RSVP, and simple search.',
      link: 'https://github.com/yourusername/events-platform'
    },
    {
      title: 'Responsive Company Site',
      desc:
        'A responsive site built with mobile-first CSS Grid and Flexbox. Focus: accessibility, fluid typography, and breakpoint-specific layouts.',
      link: 'https://github.com/yourusername/responsive-site'
    },
    {
      title: 'Personal Blog (React)',
      desc:
        'A small blog using React for frontend and local JSON/mock API for content. Includes routing, markdown posts, and version-controlled source.',
      link: 'https://github.com/yourusername/react-blog'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="card-actions">
                <a className="link" href={p.link} target="_blank" rel="noreferrer">View Code</a>
                <a className="link ghost" href="#contact">Ask for Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



