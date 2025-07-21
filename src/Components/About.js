import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div>
            <p>Hello! I'm Muhsin Abdiqani, a passionate web designer with four months of experience in HTML, CSS, Tailwind CSS, and Bootstrap. I love creating visually stunning and responsive websites.</p>
            <p>My skills include:</p>
          </div>
          <div>
            <ul className="about-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
