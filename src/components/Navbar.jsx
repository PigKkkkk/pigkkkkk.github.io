import { useState, useEffect } from 'react';
import { profile } from '../data/content';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            GU<span>.</span>
          </a>
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="navbar-cta">
                CV
              </a>
            </li>
          </ul>
          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </nav>
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
        ))}
        <a href={profile.cvUrl} target="_blank" rel="noreferrer" onClick={handleLinkClick} style={{ color: 'var(--color-accent)' }}>
          Download CV
        </a>
      </div>
    </>
  );
}
