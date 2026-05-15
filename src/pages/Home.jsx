import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';
import { copy } from '../data/translations.js';
import { whatsappUrl } from '../utils/whatsapp.js';

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <AnimatedPage>
      <section className="relative min-h-[92vh] overflow-hidden pt-20 text-white">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88"
          alt={t.home.heroAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/88 via-dark/52 to-dark/12" />
        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl flex-col justify-center px-5 py-20">
          <div className="max-w-4xl rounded-lg bg-terracotta px-6 py-6 shadow-soft md:px-8 md:py-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-sand"
            >
              {t.home.heroEyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.65 }}
              className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] md:text-8xl"
            >
              Adrar Deco
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
            >
              {t.home.heroText}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <ButtonLink href={whatsappUrl(t.whatsapp)}>{t.common.quote}</ButtonLink>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-dark"
            >
              {t.common.viewPortfolio}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark px-5 py-8 text-sand">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {t.home.stats.map(([value, label]) => (
            <div key={label} className="border-l border-terracotta pl-5">
              <p className="font-display text-5xl font-semibold">{value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.22em] text-sand/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-grain px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            text={t.home.servicesText}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow={t.nav.portfolio}
              title={t.home.portfolioTitle}
              text={t.home.portfolioText}
            />
            <Link
              to="/portfolio"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta transition hover:text-dark"
            >
              {t.common.viewAll}
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
