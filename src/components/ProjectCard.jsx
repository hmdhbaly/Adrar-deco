import { decorImageFallback } from '../utils/imageFallback.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { categories } from '../data/projects.js';

export default function ProjectCard({ project, onClick }) {
  const { language } = useLanguage();
  const title = project.title[language];
  const location = project.location[language];
  const category = categories.find((item) => item.id === project.category)?.label[language];

  return (
    <button
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-dark text-start shadow-soft"
      type="button"
      onClick={() => onClick?.(project)}
    >
      <img
        src={project.image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = decorImageFallback;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/78 via-dark/18 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dark">
          {category}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-none">{title}</h3>
        <p className="mt-2 text-sm text-white/78">{location}</p>
      </div>
    </button>
  );
}
