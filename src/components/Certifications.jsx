import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'linear-gradient(180deg, rgba(17,24,39,0.4) 0%, var(--color-bg) 100%)' }}>
      <div className="container">
        <span className="section-label">Certifications</span>
        <h2 className="section-title">Credentials</h2>
        <div className="section-divider" />

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.credlyUrl}
              target="_blank"
              rel="noreferrer"
              className="cert-card reveal"
            >
              <div
                className="cert-badge"
                style={{ background: cert.badgeColor }}
              >
                {cert.issuer}
              </div>
              <div className="cert-info">
                <p className="cert-name">{cert.name}</p>
                <p className="cert-meta">{cert.issuer} · {cert.date}</p>
                <p className="cert-credly-label">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Verify on Credly
                </p>
              </div>
            </a>
          ))}
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: 'var(--color-text-dim)', textAlign: 'center' }}>
          All certifications verified via{' '}
          <a href="https://www.credly.com" target="_blank" rel="noreferrer">Credly</a>
        </p>
      </div>
    </section>
  );
}
