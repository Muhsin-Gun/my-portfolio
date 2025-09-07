import React, { useState } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null); // null | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
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
              <input name="phone" value={form.phone} onChange={onChange} placeholder="+254..." />
            </label>

            <label>
              <span className="label">Message</span>
              <textarea name="message" value={form.message} onChange={onChange} rows="5" placeholder="Message..." required />
            </label>

            <div className="form-row">
              <button className="btn primary" type="submit">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <span className="msg success">Message sent ✅</span>}
              {status === "error" && <span className="msg error">Something went wrong ❌</span>}
            </div>
          </form>

          <aside className="card contact-info">
            <div><strong>Email:</strong> <a href="mailto:muhsinabdi781@gmail.com">muhsinabdi781@gmai.com</a></div>
            <div><strong>Phone:</strong> <a href="tel:+254793027220">+123 456 7890</a></div>

            <div className="socials">
              <a href="https://github.com/Muhsin-Gun" target="_blank" rel="noreferrer">
                <FaGithub size={22} /> GitHub
              </a>
              <a href="https://instagram.com/__.a4ace" target="_blank" rel="noreferrer">
                <FaInstagram size={22} /> Instagram
              </a>
              <a href="https://twitter.com/Muhsin Abdi" target="_blank" rel="noreferrer">
                <FaTwitter size={22} /> Twitter
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
                <FaLinkedin size={22} /> LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
