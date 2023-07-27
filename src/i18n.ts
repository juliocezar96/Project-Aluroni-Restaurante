import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json'; 
import ptTranslation from './locales/pt.json'; 

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt', 
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false, 
    },
    resources: {
      en: { translation: enTranslation }, 
      pt: { translation: ptTranslation },
    },
  });

export default i18n;
