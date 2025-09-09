
import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaClock } from 'react-icons/fa';
import { motion, useMotionValue, animate, useMotionTemplate } from 'framer-motion';


const projectsList = [
  {
    title: 'Events Platform (frontend)',
    desc: 'Frontend for an events manager app built with React. Connects to a Node/Express backend.',
    ownerRepo: 'Muhsin-Gun/event-frontend',
    codeLink: 'https://github.com/Muhsin-Gun/event-frontend',
    live: 'https://event-frontend-gray.vercel.app'
  },
  {
    title: 'Calculator (JS)',
    desc: 'Standalone calculator built with HTML/CSS/JavaScript. Mobile-first and keyboard-friendly.',
    ownerRepo: 'Muhsin-Gun/Calculator',
    codeLink: 'https://github.com/Muhsin-Gun/Calculator',
    live: 'https://calculator-ten-omega-61.vercel.app/'
  },
  {
    title: 'Blogs (PHP)',
    desc: 'A small PHP blog project using XAMPP. Includes posts and basic admin flows.',
    ownerRepo: 'Muhsin-Gun/blogs-php',
    codeLink: 'https://github.com/Muhsin-Gun/blogs-php',
    live: '',
    localOnly: true
  }
];

const CACHE_KEY = 'projects:github_meta';
const CACHE_TTL = 1000 * 60 * 60 * 12;

const Projects = () => {
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [clicks, setClicks] = useState(() => JSON.parse(sessionStorage.getItem('starClicks') || '{}'));

  useEffect(() => {
    sessionStorage.setItem('starClicks', JSON.stringify(clicks));
  }, [clicks]);

  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
    if (cached.fetchedAt && Date.now() - cached.fetchedAt < CACHE_TTL) {
      setMeta(cached.data);
      setLoading(false);
      fetchMeta(cached.data, false);
    } else {
      fetchMeta({}, true);
    }
  }, []);

  const fetchMeta = async (cur, showLoading) => {
    if (showLoading) setLoading(true);
    const results = {};
    await Promise.all(projectsList.map(async (p) => {
      if (cur[p.ownerRepo]) {
        results[p.ownerRepo] = cur[p.ownerRepo];
      } else {
        try {
          const res = await fetch(`https://api.github.com/repos/${p.ownerRepo}`);
          const json = await res.json();
          results[p.ownerRepo] = {
            stars: json.stargazers_count || 0,
            updated: json.updated_at ? new Date(json.updated_at).toLocaleDateString() : '—'
          };
        } catch {
          results[p.ownerRepo] = cur[p.ownerRepo] || { stars: 0, updated: '—' };
        }
      }
    }));
    setMeta(results);
    localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), data: results }));
    setLoading(false);
  };

  
  const color = useMotionValue('#6c63ff');
  useEffect(() => {
    animate(color, ['#6c63ff', '#41EAD4', '#6c63ff'], {
      duration: 4,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    });
  }, [color]);
  const gradient = useMotionTemplate`linear-gradient(90deg, ${color}, ${color} 50%, ${color})`;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projectsList.map(p => {
            const repoMeta = meta[p.ownerRepo] || {};
            const isSelected = selected === p.ownerRepo;
            return (
              <article key={p.ownerRepo} className="card project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-meta">
                  <div className="meta-left">
                    <a className="link code-link"
                       href={p.codeLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{ marginRight: 6 }} />View Code
                    </a>
                    {p.live && (
                      <a className="link ghost live-link"
                         href={p.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt style={{ marginRight: 6 }} />Live Demo
                      </a>
                    )}
                  </div>
                  <div className="meta-right">
                    <motion.div
                      className="meta-item star-item"
                      onClick={() => {
                        setSelected(p.ownerRepo);
                        setClicks(cs => ({ ...cs, [p.ownerRepo]: (cs[p.ownerRepo] || 0) + 1 }));
                      }}
                      style={{ backgroundImage: isSelected ? gradient : undefined }}
                      animate={isSelected ? { scale: [1, 1.4, 1] } : { opacity: 0.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaStar /> {clicks[p.ownerRepo] || repoMeta.stars || '—'}
                    </motion.div>
                    <span className="meta-item">
                      <FaClock style={{ marginRight: 6 }} />{repoMeta.updated || '—'}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {loading && <p style={{ color: 'var(--muted)', marginTop: 12 }}>Loading project info…</p>}
      </div>
    </section>
  );
};

export default Projects;






