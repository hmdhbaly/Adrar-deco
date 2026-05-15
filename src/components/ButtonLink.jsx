import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ButtonLink({ href, children, className = '', variant = 'primary' }) {
  const { isArabic } = useLanguage();
  const Arrow = isArabic ? FaArrowLeft : FaArrowRight;
  const styles =
    variant === 'light'
      ? 'bg-ivory text-dark hover:bg-white'
      : 'bg-terracotta text-white hover:bg-clay';

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${styles} ${className}`}
    >
      {children}
      <Arrow aria-hidden="true" className="text-xs" />
    </a>
  );
}
