import { LuBookOpen, LuExternalLink, LuMail, LuTarget } from 'react-icons/lu';
import Section, { Reveal } from './Section';

const interests = ['Applied machine learning', 'Trustworthy & explainable AI', 'Efficient client-side ML', 'Computer vision', 'NLP for Bangla'];
const strengths = [
  ['Research foundation', 'Experimental benchmarking, quantitative analysis, external validation, and technical reporting.'],
  ['Engineering perspective', 'Python, TensorFlow, PyTorch, scikit-learn, web systems, and reproducible implementation workflows.'],
  ['Collaboration ready', 'Comfortable turning research questions into measurable experiments, clean documentation, and usable prototypes.'],
];

export default function PhDProfile() {
  return (
    <Section id="phd-profile" title="PhD Research Profile">
      <Reveal className="phd-intro">
        <div>
          <span className="eyebrow"><LuTarget /> For prospective supervisors</span>
          <h3>I am preparing for PhD opportunities in applied AI and intelligent systems.</h3>
          <p>I am especially keen to join a research group where I can contribute to rigorous, real-world machine-learning research while growing through close supervision and collaboration.</p>
        </div>
        <div className="phd-actions">
          <a className="btn primary" href="mailto:cse.engrshaounchandrashill@tutanota.de?subject=Potential%20PhD%20supervision%20discussion"><LuMail /> Discuss supervision</a>
          <a className="btn" href="https://scholar.google.com/citations?user=gGfY9toAAAAJ" target="_blank" rel="noopener noreferrer"><LuBookOpen /> Google Scholar <LuExternalLink /></a>
        </div>
      </Reveal>
      <div className="phd-layout">
        <Reveal className="phd-card" delay={60}>
          <h3>Research interests</h3>
          <div className="interest-chips">{interests.map((item) => <span key={item}>{item}</span>)}</div>
          <p className="phd-note">I welcome conversations with supervisors whose work overlaps these areas, particularly projects that combine robust ML methods with deployable software systems.</p>
        </Reveal>
        <div className="phd-strengths">
          {strengths.map(([title, text], index) => (
            <Reveal key={title} className="phd-strength" delay={100 + index * 70}>
              <span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="supervisor-note" delay={140}>
        <strong>For a first conversation:</strong> Please feel free to share a recent paper or project from your lab. I will review it and send a focused note on where my background could contribute.
      </Reveal>
    </Section>
  );
}
