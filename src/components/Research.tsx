import Section, { Reveal } from './Section';
import { aiProjects, research } from '../data/research';
import { spotlight } from '../hooks/hooks';

export default function Research() {
  return (
    <Section id="research" title="Research & AI">
      <Reveal className="rfeature">
        <article onPointerMove={spotlight}>
          <div className="rhead">
            <span className="stack badge">{research.kind}</span>
            <span className="stack">{research.org}</span>
          </div>
          <h3>{research.title}</h3>
          <ul className="pts">{research.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="chips">{research.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </article>
      </Reveal>
      <Reveal className="rsub"><h3>Selected AI &amp; NLP projects</h3></Reveal>
      <div className="rgrid">
        {aiProjects.map((p, i) => (
          <Reveal key={p.title} className="rcard" delay={i * 70}>
            <article onPointerMove={spotlight}>
              <img src={p.icon} alt="" width="44" height="44" loading="lazy" decoding="async" />
              <span className="stack">{p.kind}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
