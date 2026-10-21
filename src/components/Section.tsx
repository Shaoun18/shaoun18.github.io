import type { ReactNode } from 'react';
import { useReveal } from '../hooks/hooks';

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Section({ id, title, aside, children }: { id: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="sec wrap">
      <Reveal className="sec-head">
        <h2>{title}</h2>
        {aside}
      </Reveal>
      {children}
    </section>
  );
}
