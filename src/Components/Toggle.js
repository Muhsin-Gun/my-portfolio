import React, { useState, useEffect } from 'react';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="toggle-menu">
      <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className="fas fa-bars"></i>
      </button>
      {isOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Toggle;

