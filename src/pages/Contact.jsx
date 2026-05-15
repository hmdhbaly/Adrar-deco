import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { defaultMessage, whatsappUrl } from '../utils/whatsapp.js';

const contactItems = [
  { icon: FaPhoneAlt, label: 'Telephone', value: '+222 46 23 85 68' },
  { icon: FaMapMarkerAlt, label: 'Adresse', value: 'Nouakchott, Mauritanie' },
  { icon: FaClock, label: 'Horaires', value: 'Lundi - Samedi / 9h00 - 18h00' },
];

export default function Contact() {
  return (
    <AnimatedPage>
      <section className="bg-grain px-5 pb-20 pt-36 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Parlez-nous de votre projet sur WhatsApp."
              text="Pas de formulaire, pas d'attente. Envoyez votre idee, vos dimensions ou une photo de la piece, et nous vous repondons directement."
            />
            <ButtonLink href={whatsappUrl(defaultMessage)} className="mt-8">
              Ouvrir WhatsApp
            </ButtonLink>
          </div>

          <div className="rounded-lg bg-ivory p-6 shadow-soft">
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4 rounded-lg border border-bronze/15 p-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-terracotta text-white">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                        {item.label}
                      </p>
                      <p className="mt-1 text-lg text-dark">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappUrl(defaultMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-5 text-center text-lg font-semibold text-white transition hover:brightness-95"
            >
              <FaWhatsapp className="text-2xl" aria-hidden="true" />
              Envoyer un message WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-soft">
          <iframe
            title="Carte de Nouakchott"
            src="https://www.google.com/maps?q=Nouakchott%2C%20Mauritania&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </AnimatedPage>
  );
}
