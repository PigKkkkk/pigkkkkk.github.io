import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Work History</h2>
        <div className="section-divider" />

        <div className="experience-list">
          {experience.map((job, i) => (
            <div key={i} className="experience-item reveal">
              <div className="exp-meta">
                <span className="exp-period">{job.period}</span>
                <span className="exp-location">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {job.location}
                </span>
                <span className="exp-type-tag">{job.type}</span>
              </div>
              <div className="exp-body">
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-company">{job.company}</p>
                <ul className="exp-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
