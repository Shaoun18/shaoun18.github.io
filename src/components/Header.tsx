import { useEffect, useState } from 'react';
import { LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu';
import { useTheme } from '../hooks/hooks';

export default function Header({ nav, active }: { nav: { id: string; label: string }[]; active: string }) {
  const [open, setOpen] = useState(false);
  const [theme, toggle] = useTheme();

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  return (
    <header className="top">
      <div className="wrap bar">
        <a className="brand" href="https://sites.google.com/view/programmershaoun" target="_blank" rel="noopener noreferrer">
          <img src="./logo.webp" alt="" width="36" height="36" />
          <span>ProgrammerShaoun</span>
        </a>
        <nav className={`menu${open ? ' open' : ''}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="bar-end">
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <LuSun /> : <LuMoon />}
          </button>
          <a className="btn primary sm" href="#contact">Hire me</a>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
