import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { copy } from '../data/translations.js';

const links = [
  { to: '/', label: 'home' },
  { to: '/services', label: 'services' },
  { to: '/portfolio', label: 'portfolio' },
  { to: '/contact', label: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = copy[language];

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
              {t.nav[link.label]}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
            className="rounded-full border border-dark/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-dark transition hover:border-terracotta hover:text-terracotta"
            aria-label={t.nav.language}
          >
            {language === 'fr' ? 'AR' : 'FR'}
          </button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-dark/15 text-dark md:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto grid max-w-7xl gap-4 border-t border-dark/10 py-5 md:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
              {t.nav[link.label]}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => {
              setLanguage(language === 'fr' ? 'ar' : 'fr');
              setOpen(false);
            }}
            className="w-fit rounded-full border border-dark/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-dark"
            aria-label={t.nav.language}
          >
            {language === 'fr' ? 'AR' : 'FR'}
          </button>
        </div>
      )}
    </header>
  );
}
