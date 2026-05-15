import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { defaultMessage, whatsappUrl } from '../utils/whatsapp.js';

export default function Footer() {
  return (
    <footer className="bg-dark px-5 py-12 text-sand">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-4xl font-semibold">
            Adrar Deco
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-sand/75">
            Interieurs elegants, meubles sur mesure et decoration raffinee pour maisons et espaces
            professionnels a Nouakchott.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
            Navigation
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-sand/75">
            <Link className="transition hover:text-white" to="/services">
              Services
            </Link>
            <Link className="transition hover:text-white" to="/portfolio">
              Portfolio
            </Link>
            <Link className="transition hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
            Contact
          </h2>
          <div className="mt-4 flex gap-3">
            <a
              className="grid h-11 w-11 place-items-center rounded-full bg-sand/10 text-xl transition hover:bg-terracotta"
              href={whatsappUrl(defaultMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className="grid h-11 w-11 place-items-center rounded-full bg-sand/10 text-xl transition hover:bg-terracotta"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-sand/10 pt-6 text-sm text-sand/55">
        Adrar Deco / Nouakchott, Mauritanie / (c) 2025
      </div>
    </footer>
  );
}
