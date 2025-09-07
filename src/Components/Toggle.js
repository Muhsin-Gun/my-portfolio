import React, { useState, useEffect } from 'react';


const Toggle = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)}>
        <nav className="overlay-nav" onClick={(e) => e.stopPropagation()}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Toggle;

