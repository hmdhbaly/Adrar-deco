import { FaCouch, FaPalette, FaRulerCombined } from 'react-icons/fa';

export const services = [
  {
    id: 'design',
    title: { fr: "Design d'interieur", ar: 'تصميم داخلي' },
    short: {
      fr: "Concepts complets pour salons, villas, bureaux et espaces d'accueil.",
      ar: 'تصورات كاملة للصالونات، الفلل، المكاتب، ومساحات الاستقبال.',
    },
    description: {
      fr:
        "De l'ambiance generale au suivi de chantier, Adrar Deco compose des interieurs chaleureux, fonctionnels et parfaitement adaptes a votre mode de vie.",
      ar:
        'من الفكرة العامة إلى متابعة التنفيذ، تصمم Adrar Deco مساحات داخلية دافئة، عملية، ومناسبة تماما لأسلوب حياتك.',
    },
    icon: FaRulerCombined,
    message: {
      fr:
        "Bonjour Adrar Deco, je suis interesse par vos services de design d'interieur. Pouvez-vous me donner un devis ?",
      ar: 'مرحبا Adrar Deco، أنا مهتم بخدمات التصميم الداخلي. هل يمكنكم إرسال عرض سعر؟',
    },
  },
  {
    id: 'meubles',
    title: { fr: 'Meubles sur mesure', ar: 'أثاث حسب الطلب' },
    short: {
      fr: 'Pieces uniques en bois massif, finitions artisanales et proportions justes.',
      ar: 'قطع فريدة من الخشب المتين، بتشطيبات حرفية ونسب مدروسة.',
    },
    description: {
      fr:
        'Bibliotheques, tables, dressings, consoles et assises sont dessines pour votre espace puis realises avec des materiaux durables.',
      ar:
        'نصمم المكتبات، الطاولات، خزائن الملابس، الكونسولات، والمقاعد حسب مساحتك وننفذها بمواد متينة.',
    },
    icon: FaCouch,
    message: {
      fr:
        'Bonjour Adrar Deco, je suis interesse par vos meubles sur mesure. Pouvez-vous me donner un devis ?',
      ar: 'مرحبا Adrar Deco، أنا مهتم بالأثاث حسب الطلب. هل يمكنكم إرسال عرض سعر؟',
    },
  },
  {
    id: 'decoration',
    title: { fr: 'Decoration & Accessoires', ar: 'ديكور وإكسسوارات' },
    short: {
      fr: 'Objets, textiles, luminaires et art pour donner une ame aux pieces.',
      ar: 'قطع ديكور، أقمشة، إضاءة، وفن يمنح الغرف روحا خاصة.',
    },
    description: {
      fr:
        'Nous selectionnons les touches finales qui changent tout : tapis, coussins, vases, luminaires, tableaux et compositions murales.',
      ar:
        'نختار اللمسات الأخيرة التي تصنع الفرق: السجاد، الوسائد، المزهريات، الإضاءة، اللوحات، والتنسيقات الجدارية.',
    },
    icon: FaPalette,
    message: {
      fr:
        'Bonjour Adrar Deco, je suis interesse par vos services de decoration. Pouvez-vous me donner un devis ?',
      ar: 'مرحبا Adrar Deco، أنا مهتم بخدمات الديكور. هل يمكنكم إرسال عرض سعر؟',
    },
  },
];
