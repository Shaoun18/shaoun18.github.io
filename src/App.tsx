import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useScrollState } from './hooks/hooks';

// Below-the-fold sections are split into their own chunks and prefetched when the browser is idle.
const loaders = {
  projects: () => import('./components/Projects'),
  research: () => import('./components/Research'),
  skills: () => import('./components/Skills'),
  about: () => import('./components/About'),
  education: () => import('./components/Education'),
  contact: () => import('./components/Contact'),
};
const Projects = lazy(loaders.projects);
const Research = lazy(loaders.research);
const Skills = lazy(loaders.skills);
const About = lazy(loaders.about);
const Education = lazy(loaders.education);
const Contact = lazy(loaders.contact);

const NAV = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
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
        <Experience />
        <Suspense fallback={<Holder id="projects" />}><Projects /></Suspense>
        <Suspense fallback={<Holder id="research" />}><Research /></Suspense>
        <Suspense fallback={<Holder id="skills" />}><Skills /></Suspense>
        <Suspense fallback={<Holder id="about" />}><About /></Suspense>
        <Suspense fallback={<Holder id="education" />}><Education /></Suspense>
        <Suspense fallback={<Holder id="contact" />}><Contact /></Suspense>
      </main>
      <Footer />
    </>
  );
}
