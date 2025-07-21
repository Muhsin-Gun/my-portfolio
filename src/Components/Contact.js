import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer"><i className="fab fa-tiktok"></i></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
