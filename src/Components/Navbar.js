import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

/*
  Navbar:
  - Shows inline links on desktop
  - Shows a hamburger Toggle on mobile (<=900px)
  - Links have animated underline on hover
*/
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <div className="brand">
          <div className="brand-main">Muhsin</div>
          <div className="brand-sub">web dev</div>
        </div>

        {!isMobile ? (
          <ul className="nav-links">
            <li><a href="#home">Home <span className="underline" /></a></li>
            <li><a href="#projects">Projects <span className="underline" /></a></li>
            <li><a href="#about">About <span className="underline" /></a></li>
            <li><a href="#contact">Contact <span className="underline" /></a></li>
          </ul>
        ) : (
          <Toggle />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
