import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import { useScrollState } from './hooks/hooks';

// Sections after Education are split into their own chunks and prefetched when the browser is idle.
const loaders = {
  experience: () => import('./components/Experience'),
  projects: () => import('./components/Projects'),
  research: () => import('./components/Research'),
  skills: () => import('./components/Skills'),
  contact: () => import('./components/Contact'),
};
const Experience = lazy(loaders.experience);
const Projects = lazy(loaders.projects);
const Research = lazy(loaders.research);
const Skills = lazy(loaders.skills);
const Contact = lazy(loaders.contact);

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];
const IDS = NAV.map((n) => n.id).concat('contact');

const Holder = ({ id }: { id: string }) => <section id={id} className="holder" aria-busy="true" />;

export default function App() {
  const { progress, active } = useScrollState(IDS);

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 600));
    idle(() => Object.values(loaders).forEach((l) => l()));
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Header nav={NAV} active={active} />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Suspense fallback={<Holder id="research" />}><Research /></Suspense>
        <Suspense fallback={<Holder id="experience" />}><Experience /></Suspense>
        <Suspense fallback={<Holder id="projects" />}><Projects /></Suspense>
        <Suspense fallback={<Holder id="skills" />}><Skills /></Suspense>
        <Suspense fallback={<Holder id="contact" />}><Contact /></Suspense>
      </main>
      <Footer />
    </>
  );
}
