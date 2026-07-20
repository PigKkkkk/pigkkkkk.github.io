import { about, profile, education } from '../data/content';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>

          <div className="about-card reveal">
            <p className="about-card-title">Quick Links</p>
            <div className="about-links">
              <div className="about-link-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{profile.location}</span>
              </div>
              <div className="about-link-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="about-link-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/gilbert-uwonkunda</a>
              </div>
              <div className="about-link-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <a href={profile.github} target="_blank" rel="noreferrer">github.com/gilbert-uwonkunda</a>
              </div>
              <div className="about-link-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <a href="https://zoneagent.live" target="_blank" rel="noreferrer">zoneagent.live</a>
              </div>
            </div>

            <div className="about-card-divider" />

            <p className="about-card-title">Education</p>
            {education.map((edu, i) => (
              <div key={i} className="about-education">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <p style={{ marginTop: 2 }}>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
