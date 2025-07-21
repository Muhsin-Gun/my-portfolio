import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <img src="avatar.jpg" alt="Avatar" className="home-avatar" />
        <h1 className="home-title">Hii Welcome to my portfolio</h1>
        <p className="home-subtitle">Web Designer | HTML | CSS | Tailwind | Bootstrap | Javascript | React | Responsive Design</p>
        <a href="#contact" className="hire-btn">Hire Me</a>
      </div>
    </section>
  );
};

export default Home;
