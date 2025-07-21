import React, { useState } from 'react';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="mobile-menu absolute top-full left-0 w-full bg-black bg-opacity-90 text-white flex flex-col gap-4 p-4 z-50">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacts</a></li>
        </ul>
      )}
    </div>
  );
};

export default Toggle;
