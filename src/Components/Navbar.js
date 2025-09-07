import React, { useEffect, useRef, useState } from 'react';

/**
 * Navbar (single-file solution)
 * - Desktop: inline links with animated underline
 * - Mobile: hamburger toggles a dropdown that expands BELOW the header (no overlay)
 * - Closes on outside click, Escape key, and on window resize > 900px
 * - Adds aria-expanded and aria-controls for accessibility
 *
 * Usage: put this file at src/Components/Navbar.js and remove any old Toggle.js / overlay files.
 */
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth <= 900;
      setIsMobile(small);
      if (!small) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === 'Escape' && open) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav container" role="navigation" aria-label="Primary">
        <div className="brand">
          <div className="brand-main">Muhsin</div>
          <div className="brand-sub">web dev</div>
        </div>

        {/* Desktop links */}
        {!isMobile ? (
          <ul className="nav-links" data-mode="desktop">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>
                  {l.label}
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <button
              ref={burgerRef}
              className={`hamburger ${open ? 'open' : ''}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((s) => !s)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>

            <div
              id="mobile-menu"
              ref={dropdownRef}
              className={`mobile-dropdown ${open ? 'open' : ''}`}
              aria-hidden={!open}
            >
              <ul className="mobile-links">
                {links.map((l, i) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} onClick={() => setOpen(false)}>
                      
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
