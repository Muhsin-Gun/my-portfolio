import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <small>© {new Date().getFullYear()} Muhsin Abdiqani — Built with React</small>
      </div>
    </footer>
  );
};

export default Footer;

