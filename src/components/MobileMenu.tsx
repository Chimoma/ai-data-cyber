import { NavLink } from 'react-router-dom';
import { navLinks } from '../lib/content';

interface MobileMenuProps {
  open: boolean;
}

export default function MobileMenu({ open }: MobileMenuProps) {
  return (
    <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="border-t border-line bg-panel md:hidden">
      <ul className="mx-auto max-w-6xl px-5 py-2">
        {navLinks.map((link, i) => (
          <li key={link.to} className="border-b border-line last:border-0">
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between py-4 font-mono text-sm uppercase tracking-widest ${
                  isActive ? 'text-lime' : 'text-white'
                }`
              }
            >
              {link.label}
              <span aria-hidden="true" className="text-mist">0{i + 1}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
