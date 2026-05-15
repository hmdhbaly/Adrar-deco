import { FaWhatsapp } from 'react-icons/fa';
import { defaultMessage, whatsappUrl } from '../utils/whatsapp.js';

export default function WhatsAppBtn() {
  return (
    <a
      href={whatsappUrl(defaultMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter Adrar Deco sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-105"
    >
      <FaWhatsapp />
    </a>
  );
}
