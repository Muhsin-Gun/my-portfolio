// src/Components/Projects.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Events Platform (frontend)',
      desc:
        'Frontend for an events manager app built with React. Connects to a Node/Express backend for events CRUD and RSVP features.',
      codeLink: 'https://github.com/Muhsin-Gun/event-frontend',
      live: '' 
    },
    {
      title: 'Calculator (vanilla JS)',
      desc:
        'Standalone calculator built with HTML/CSS/JavaScript. Mobile-first and keyboard-friendly. (Repo available for review.)',
      codeLink: 'https://github.com/Muhsin-Gun/Calculator',
      live: ''
    },
    {
      title: 'Blogs (PHP)',
      desc:
        'A small PHP blog project (server-rendered). Includes posts, admin flows and simple routing — good for showing full-stack knowledge.',
      codeLink: 'https://github.com/Muhsin-Gun/blogs-php',
      live: ''
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
                <a
                  className="link"
                  href={p.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ verticalAlign: 'middle', marginRight: 8 }} />
                  View Code
                </a>

                {p.live ? (
                  <a className="link ghost" href={p.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <span className="link ghost" title="Deploy to get a live demo">No live demo yet</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;




