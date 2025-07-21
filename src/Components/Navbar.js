import React from 'react';
import Toggle from './Toggle';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <h1 className="navbar-title">Muhsin Abdiqani</h1>

        {/* Full menu shown only on desktop */}
        <ul className="nav-menu desktop-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>

        {/* Toggle button and mobile menu */}
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;