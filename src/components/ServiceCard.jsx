import ButtonLink from './ButtonLink.jsx';
import { whatsappUrl } from '../utils/whatsapp.js';

export default function ServiceCard({ service, compact = false }) {
  const Icon = service.icon;

  return (
    <article className="rounded-lg border border-bronze/15 bg-ivory p-6 shadow-soft">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-terracotta text-2xl text-white">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mt-8 font-display text-3xl font-semibold text-dark">{service.title}</h3>
      <p className="mt-4 leading-7 text-dark/68">{compact ? service.short : service.description}</p>
      <ButtonLink href={whatsappUrl(service.message)} className="mt-7">
        Demander un devis
      </ButtonLink>
    </article>
  );
}
