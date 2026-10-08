import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../lib/content';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* [Add company logo] — replace this text wordmark with your logo image */}
        <Link to="/" className="flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight">
          <span aria-hidden="true" className="h-2.5 w-2.5 bg-lime" />
          AI&nbsp;&amp;&nbsp;DATA&nbsp;CYBER
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            {navLinks.map((link, i) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `transition-colors hover:text-lime ${isActive ? 'text-lime' : 'text-mist'}`
                  }
                >
                  <span aria-hidden="true" className="mr-1.5 opacity-50">0{i + 1}</span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="font-mono text-lg leading-none">{open ? '×' : '≡'}</span>
        </button>
      </div>
      <MobileMenu open={open} />
    </header>
  );
}
