export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-terracotta">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-dark md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-dark/70 md:text-lg">{text}</p>}
    </div>
  );
}
