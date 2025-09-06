import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1 className="home-title">Welcome!</h1>
        <p className="home-subtitle">
          I'm <span className="highlight">Muhsin</span>, a Full-Stack Developer
        </p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default Home;

