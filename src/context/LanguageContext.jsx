import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const languages = {
  fr: { code: 'fr', label: 'FR', name: 'Francais', dir: 'ltr' },
  ar: { code: 'ar', label: 'AR', name: 'العربية', dir: 'rtl' },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('adrar-language') || 'fr');
  const config = languages[language] || languages.fr;

  useEffect(() => {
    document.documentElement.lang = config.code;
    document.documentElement.dir = config.dir;
    localStorage.setItem('adrar-language', config.code);
  }, [config]);

  const value = useMemo(
    () => ({
      language: config.code,
      dir: config.dir,
      isArabic: config.code === 'ar',
      setLanguage,
    }),
    [config],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
