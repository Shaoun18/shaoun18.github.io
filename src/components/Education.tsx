import Section, { Reveal } from './Section';
import { education } from '../data/education';

const ICON = ['graduation-cap', 'mortarboard', 'College', 'College', 'College'];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="edu">
        {education.map((e, i) => (
          <Reveal key={e.degree} className="edrow" delay={i * 50}>
            <img src={`./img/${ICON[i] ?? 'College'}.webp`} alt="" width="40" height="40" loading="lazy" decoding="async" />
            <div>
              <h3>{e.degree}</h3>
              <a href={e.url} target="_blank" rel="noopener noreferrer">{e.school}</a>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <p className="meta"><span>{e.period}</span><b>{e.score}</b></p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
