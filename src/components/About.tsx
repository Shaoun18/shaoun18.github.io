import Section, { Reveal } from './Section';
import { about } from '../data/about';
import { interests } from '../data/interests';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about">
        <Reveal className="prose">
          {about.map((t) => <p key={t}>{t}</p>)}
        </Reveal>
        <Reveal className="interests" delay={80}>
          <h3>Areas of Interest</h3>
          <ul>
            {interests.map((i) => (
              <li key={i.text}>
                <img src={i.icon} alt="" width="28" height="28" loading="lazy" decoding="async" />
                <span>{i.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
