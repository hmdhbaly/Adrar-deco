export const WHATSAPP_NUMBER = '+22246238568';

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  "Bonjour Adrar Deco, je souhaite discuter d'un projet de decoration. Pouvez-vous me donner plus d'informations ?";
