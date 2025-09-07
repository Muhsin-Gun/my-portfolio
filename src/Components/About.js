import React from 'react';

/*
  About Section:
  - Explains who you are and what skills you bring.
  - Grid layout: text + skill tags (hover highlight).
*/
const About = () => {
  const skills = [
    'HTML5 & CSS3',
    'Responsive Design',
    'JavaScript (ES6+)',
    'React.js',
    'Node.js (Express)',
    'Databases (MongoDB/MySQL)',
    'Git & Version Control',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I’m <strong>Muhsin</strong>, a junior web developer passionate about
              building modern, responsive, and accessible web applications.
              Over the past 6 months I’ve learned to design layouts, work with
              React for front-end development, and build simple APIs using Node.js.
            </p>
            <p>
              My goal is to keep growing as a full-stack developer by creating
              useful, creative, and well-structured projects that solve real
              problems.
            </p>
          </div>

          <div className="skills">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
