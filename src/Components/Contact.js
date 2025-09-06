import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example: send `formData` to your backend API endpoint (using fetch or Axios)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('Message sent! Thank you.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn">Send Message</button>
            {status && <p className="status-msg">{status}</p>}
          </form>
          <div className="contact-info">
            <p><strong>Email:</strong> youremail@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
