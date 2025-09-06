import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">Muhsin</div>
        {!isMobile ? (
          <ul className="nav-menu desktop-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        ) : (
          <Toggle />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
