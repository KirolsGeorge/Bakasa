import { createContext, useContext, useState } from 'react';

import type { Lang } from '../types';

type LanguageContextValue = {
  language: Lang;
  switchLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextValue>({ language: 'ar', switchLanguage: () => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>('ar');

  function switchLanguage() {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }

  return <LanguageContext.Provider value={{ language, switchLanguage }}>{children}</LanguageContext.Provider>;
}
