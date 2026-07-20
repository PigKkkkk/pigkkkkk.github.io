import { profile } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name">{profile.name}</h1>

          <p className="hero-title">
            <span className="highlight">Geospatial Data Scientist</span>, SPARC Initiative
          </p>

          <p className="hero-tagline">
            {profile.tagline}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://zoneagent.live"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ borderColor: 'rgba(52,211,153,0.3)', color: 'var(--color-green)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              ZoneAgent ↗
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-num">5<span>+</span></span>
              <span className="hero-stat-label">Years in Geospatial Technology</span>
            </div>
            <div>
              <span className="hero-stat-num">20<span>+</span></span>
              <span className="hero-stat-label">Gov Institutions Trained</span>
            </div>
            <div>
              <span className="hero-stat-num">1</span>
              <span className="hero-stat-label">Live Startup Product</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
