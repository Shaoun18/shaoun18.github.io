import { useState } from 'react';
import Section, { Reveal } from './Section';
import { experience } from '../data/experience';
import type { Experience as Job } from '../data/types';

const PREVIEW = 4;

function Job({ job, first }: { job: Job; first: boolean }) {
  const [all, setAll] = useState(false);
  const shown = all ? job.points : job.points.slice(0, PREVIEW);
  return (
    <Reveal className="job">
      <span className={`node${first ? ' live' : ''}`} aria-hidden="true" />
      <p className="when">{job.period} · {job.location}</p>
      <h3>{job.role}</h3>
      <a className="company" href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
      <ul className="pts">{shown.map((p) => <li key={p}>{p}</li>)}</ul>
      {job.points.length > PREVIEW && (
        <button className="more" onClick={() => setAll(!all)} aria-expanded={all}>
          {all ? 'Show less' : `Show all ${job.points.length} responsibilities`}
        </button>
      )}
      <div className="chips">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Software Development">
      <div className="timeline">
        {experience.map((j, i) => <Job key={j.company + j.period} job={j} first={i === 0} />)}
      </div>
    </Section>
  );
}
