import React, { useState, useEffect, useRef } from 'react';


const Toggle = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        className={`hamburger ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(s => !s)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      
      <div
        ref={menuRef}
        className={`mobile-dropdown ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <ul className="mobile-links">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Toggle;

