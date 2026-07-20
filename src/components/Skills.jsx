import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">Technical Skills</span>
        <h2 className="section-title">What I Work With</h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skills.map((category, i) => (
            <div key={i} className="skill-category-card reveal">
              <div className="skill-category-title">{category.category}</div>
              <div className="skill-pills">
                {category.items.map(item => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
