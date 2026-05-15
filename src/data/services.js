import { FaCouch, FaPalette, FaRulerCombined } from 'react-icons/fa';

export const services = [
  {
    id: 'design',
    title: "Design d'interieur",
    short: "Concepts complets pour salons, villas, bureaux et espaces d'accueil.",
    description:
      "De l'ambiance generale au suivi de chantier, Adrar Deco compose des interieurs chaleureux, fonctionnels et parfaitement adaptes a votre mode de vie.",
    icon: FaRulerCombined,
    message:
      "Bonjour Adrar Deco, je suis interesse par vos services de design d'interieur. Pouvez-vous me donner un devis ?",
  },
  {
    id: 'meubles',
    title: 'Meubles sur mesure',
    short: 'Pieces uniques en bois massif, finitions artisanales et proportions justes.',
    description:
      'Bibliotheques, tables, dressings, consoles et assises sont dessines pour votre espace puis realises avec des materiaux durables.',
    icon: FaCouch,
    message:
      'Bonjour Adrar Deco, je suis interesse par vos meubles sur mesure. Pouvez-vous me donner un devis ?',
  },
  {
    id: 'decoration',
    title: 'Decoration & Accessoires',
    short: 'Objets, textiles, luminaires et art pour donner une ame aux pieces.',
    description:
      'Nous selectionnons les touches finales qui changent tout : tapis, coussins, vases, luminaires, tableaux et compositions murales.',
    icon: FaPalette,
    message:
      'Bonjour Adrar Deco, je suis interesse par vos services de decoration. Pouvez-vous me donner un devis ?',
  },
];
