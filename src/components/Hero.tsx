import { LuDownload, LuMail, LuMapPin } from 'react-icons/lu';
import { useCountUp } from '../hooks/hooks';

const STATS = [
  { n: 15, suffix: "+", label: "Projects" },
  { n: 2, suffix: "+ yr", label: "Experience" },
  { n: 20, suffix: "+", label: "Certificates" },
  { n: 2, suffix: "+", label: "Wordpress Plugins" },
];

function Stat({ n, suffix, label }: (typeof STATS)[number]) {
  const [ref, v] = useCountUp<HTMLDivElement>(n);
  return (
    <div ref={ref} className="stat">
      <b>{v}{suffix}</b>
      <span>{label}</span>
    </div>
  );
}

function tilt(e: React.PointerEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`);
  e.currentTarget.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - 0.5) * 10}deg`);
}
const untilt = (e: React.PointerEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty('--ry', '0deg');
  e.currentTarget.style.setProperty('--rx', '0deg');
};

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="now h-in" style={{ '--d': '0ms' } as React.CSSProperties}>
          <i aria-hidden="true" /> Software QA Engineer at EchoaSoft Limited
        </p>
        <p className="name h-in" style={{ '--d': '80ms' } as React.CSSProperties}>Shaoun Chandra Shill</p>
        <h1 className="h-in" style={{ '--d': '160ms' } as React.CSSProperties}>Building clean web apps and exploring AI.</h1>
        <p className="lead h-in" style={{ '--d': '260ms' } as React.CSSProperties}>
          I craft responsive UIs, REST APIs and data-driven features. I enjoy Laravel, Vue.js, WordPress, and Python for ML experiments.
        </p>
        <div className="cta h-in" style={{ '--d': '360ms' } as React.CSSProperties}>
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href="./cv/Shaoun_Chandra_Shill.pdf" download="Shaoun_Chandra_Shill_CV.pdf"><LuDownload /> Download CV</a>
          <a className="btn" href="mailto:shaounchandrashill60@yahoo.com"><LuMail /> Email</a>
        </div>
        <div className="stats h-in" style={{ '--d': '460ms' } as React.CSSProperties}>
          {STATS.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
      <div className="portrait h-in" style={{ '--d': '220ms' } as React.CSSProperties}>
        <div className="tilt" onPointerMove={tilt} onPointerLeave={untilt}>
          <img
            src="https://avatars.githubusercontent.com/u/39999509?v=4&s=640"
            alt="Portrait of Shaoun Chandra Shill"
            width="480" height="480" fetchPriority="high" decoding="async"
          />
          <span className="loc"><LuMapPin /> Dhaka, Bangladesh</span>
        </div>
      </div>
    </section>
  );
}
