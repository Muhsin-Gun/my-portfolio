import React, { useState, useEffect, useRef } from 'react';

/*
  Fixed Toggle:
  - Dropdown opens BELOW the header (position: absolute; top:100%).
  - No body scroll lock, no full-screen overlay.
  - Closes on outside click and on resize > 900px.
*/
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

      {/* dropdown that appears BELOW header; clicks inside should not close until user selects a link */}
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

