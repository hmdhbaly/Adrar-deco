import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import { copy } from '../data/translations.js';
import { whatsappUrl } from '../utils/whatsapp.js';

export default function WhatsAppBtn() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <a
      href={whatsappUrl(t.whatsapp)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappLabel}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-105 rtl:left-5 rtl:right-auto"
    >
      <FaWhatsapp />
    </a>
  );
}
