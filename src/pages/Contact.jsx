import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { copy } from '../data/translations.js';
import { whatsappUrl } from '../utils/whatsapp.js';

const contactItems = [
  { icon: FaPhoneAlt, label: 'phone', value: '+222 46 23 85 68', dir: 'ltr' },
  { icon: FaMapMarkerAlt, label: 'address', value: 'addressValue' },
  { icon: FaClock, label: 'hours', value: 'hoursValue' },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <AnimatedPage>
      <section className="bg-grain px-5 pb-20 pt-36 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              text={t.contact.text}
            />
            <ButtonLink href={whatsappUrl(t.whatsapp)} className="mt-8">
              {t.common.whatsapp}
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
                        {t.contact[item.label]}
                      </p>
                      <p className="mt-1 text-lg text-dark" dir={item.dir || undefined}>
                        {item.value in t.contact ? t.contact[item.value] : item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappUrl(t.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-5 text-center text-lg font-semibold text-white transition hover:brightness-95"
            >
              <FaWhatsapp className="text-2xl" aria-hidden="true" />
              {t.common.sendWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-soft">
          <iframe
            title={t.contact.mapTitle}
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
