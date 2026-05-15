import ButtonLink from './ButtonLink.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { copy } from '../data/translations.js';
import { whatsappUrl } from '../utils/whatsapp.js';

export default function ServiceCard({ service, compact = false }) {
  const Icon = service.icon;
  const { language } = useLanguage();
  const t = copy[language];
  const title = service.title[language];
  const text = compact ? service.short[language] : service.description[language];

  return (
    <article className="rounded-lg border border-bronze/15 bg-ivory p-6 shadow-soft">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-terracotta text-2xl text-white">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mt-8 font-display text-3xl font-semibold text-dark">{title}</h3>
      <p className="mt-4 leading-7 text-dark/68">{text}</p>
      <ButtonLink href={whatsappUrl(service.message[language])} className="mt-7">
        {t.common.quote}
      </ButtonLink>
    </article>
  );
}
