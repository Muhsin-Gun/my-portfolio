import React from 'react';

/*
  Home - hero / introduction
  - tech-modern dark look
  - small animated accent and CTA hovers
*/
const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Muhsin</span>
          </h1>
          <p className="hero-sub">
            Junior web developer — responsive layouts, React, JavaScript, Node.js, and databases.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#projects">See Projects</a>
            <a className="btn outline" href="#contact">Get in Touch</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="info-card">
            <h4>What I do</h4>
            <ul>
              <li>Responsive web design</li>
              <li>React + component-driven UI</li>
              <li>Simple Node.js APIs</li>
              <li>Version control (Git)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
