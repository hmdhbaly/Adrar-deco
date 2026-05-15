export default function ProjectCard({ project, onClick }) {
  return (
    <button
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-dark text-left shadow-soft"
      type="button"
      onClick={() => onClick?.(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/78 via-dark/18 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-dark">
          {project.category}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-none">{project.title}</h3>
        <p className="mt-2 text-sm text-white/78">{project.location}</p>
      </div>
    </button>
  );
}
