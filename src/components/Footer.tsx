import { Link } from 'react-router-dom';
import { company } from '../lib/company';
import { navLinks } from '../lib/content';
import ContactLink from './ContactLink';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm font-medium">{company.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
            Artificial intelligence, data and cyber security services.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-widest text-mist">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-lime">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mist">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><ContactLink kind="email" value={company.contact.email} className="hover:text-lime" /></li>
            <li className="text-mist">{company.contact.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-xs text-mist">
          © {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
