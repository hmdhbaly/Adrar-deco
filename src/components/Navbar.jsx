import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-[0.18em] transition ${
      isActive ? 'text-terracotta' : 'text-dark/75 hover:text-dark'
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-dark/10 bg-sand/88 px-5 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="font-display text-3xl font-semibold text-dark" onClick={() => setOpen(false)}>
          Adrar Deco
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-dark/15 text-dark md:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto grid max-w-7xl gap-4 border-t border-dark/10 py-5 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
