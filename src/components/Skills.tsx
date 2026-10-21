import Section, { Reveal } from './Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      {skills.map((g) => (
        <Reveal key={g.group} className="skillrow">
          <h3>{g.group}</h3>
          <ul>
            {g.items.map((s) => (
              <li key={s.name}>
                <img src={s.icon} alt="" width="24" height="24" loading="lazy" decoding="async" />
                {s.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </Section>
  );
}
