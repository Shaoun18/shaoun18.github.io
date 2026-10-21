import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const SOCIAL = [
  { href: 'https://github.com/Shaoun18', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.linkedin.com/in/shaounchandrashill/', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://www.facebook.com/shaounchandrashill/', label: 'Facebook', Icon: FaFacebook },
  { href: 'https://x.com/shaoun_shill', label: 'X (Twitter)', Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <h2>Let's Connect</h2>
        <p>
          Interested in connecting for a discussion? Feel free to email me at{' '}
          <a href="mailto:cse.engrshaounchandrashill@tutanota.de">cse.engrshaounchandrashill@tutanota.de</a> or reach out through any of the social links below.
        </p>
        <div className="social">
          {SOCIAL.map(({ href, label, Icon }) => (
            <a key={label} href={href} aria-label={label} title={label} target="_blank" rel="noopener noreferrer"><Icon /></a>
          ))}
        </div>
        <small>© {new Date().getFullYear()} ProgrammerShaoun. All rights reserved.</small>
      </div>
    </footer>
  );
}
