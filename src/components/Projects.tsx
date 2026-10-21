import { LuArrowUpRight, LuCode } from 'react-icons/lu';
import Section, { Reveal } from './Section';
import { projects } from '../data/projects';
import { spotlight } from '../hooks/hooks';

const SPAN = ['s3', 's3', 's4', 's2', 's2', 's2', 's2', 's3', 's3'];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      aside={<a className="textlink" href="https://github.com/Shaoun18?tab=repositories" target="_blank" rel="noopener noreferrer">See all on GitHub</a>}
    >
      <div className="pgrid">
        {projects.map((p, i) => (
          <Reveal key={p.title} className={`pc ${SPAN[i] ?? 's2'}`} delay={(i % 3) * 70}>
            <article onPointerMove={spotlight}>
              <div className={`shot${p.banner ? ' banner' : ''}`}>
                <img src={p.img} alt={`${p.title} preview`} width={p.banner ? 772 : 900} height={p.banner ? 250 : 500} loading="lazy" decoding="async" />
              </div>
              <div className="pbody">
                <div className="tags"><span className="stack">{p.stack}</span>{p.badge && <span className="stack badge">{p.badge}</span>}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="links">
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live <LuArrowUpRight /></a>}
                  {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Code <LuCode /></a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
