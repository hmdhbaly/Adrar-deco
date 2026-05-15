import AnimatedPage from '../components/AnimatedPage.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { services } from '../data/services.js';
import { copy } from '../data/translations.js';

export default function Services() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <AnimatedPage>
      <section className="bg-grain px-5 pb-20 pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
            align="center"
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
