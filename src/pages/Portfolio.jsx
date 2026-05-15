import { useMemo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { categories, projects } from '../data/projects.js';

export default function Portfolio() {
  const [active, setActive] = useState('Tous');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (active === 'Tous' ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <AnimatedPage>
      <section className="bg-ivory px-5 pb-20 pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="Une galerie d'ambiances pour imaginer votre prochain espace."
            text="Filtrez par piece puis ouvrez les images pour observer les matieres, proportions et jeux de lumiere."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                  active === category
                    ? 'border-terracotta bg-terracotta text-white'
                    : 'border-bronze/25 text-dark hover:border-terracotta'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-dark/88 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-dark/70 text-white backdrop-blur"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[78vh] w-full rounded-lg object-cover shadow-2xl"
            />
            <div className="mt-4 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-sand/70">{selected.category}</p>
              <h2 className="font-display text-4xl font-semibold">{selected.title}</h2>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
