import React, { useState } from 'react';

/*
  Contact:
  - Controlled form (name, email, phone, message)
  - Front-end simulated send to avoid fake backend assumptions.
  - Comment explains how to connect to real backend (Node/Nodemailer).
*/
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulation: show "sent" after 900ms.
    // To connect to real backend: fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 900);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <form className="card contact-form" onSubmit={onSubmit}>
            <label>
              <span className="label">Name</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
            </label>

            <label>
              <span className="label">Email</span>
              <input name="email" value={form.email} onChange={onChange} type="email" placeholder="you@example.com" required />
            </label>

            <label>
              <span className="label">Phone (optional)</span>
              <input name="phone" value={form.phone} onChange={onChange} placeholder="+123..." />
            </label>

            <label>
              <span className="label">Message</span>
              <textarea name="message" value={form.message} onChange={onChange} rows="5" placeholder="Brief message" required />
            </label>

            <div className="form-row">
              <button className="btn primary" type="submit">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <span className="msg success">Message sent (simulated)</span>}
              {status === 'error' && <span className="msg error">Please complete required fields</span>}
            </div>

            <small className="hint">
              For a working form, connect to a Node/Express endpoint that uses an SMTP service (Nodemailer or SendGrid).
            </small>
          </form>

          <aside className="card contact-info">
            <div><strong>Email:</strong> <a href="mailto:youremail@example.com">youremail@example.com</a></div>
            <div><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></div>

            <div className="socials">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
