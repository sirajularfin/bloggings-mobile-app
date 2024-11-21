import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './en/messages';
import { Language } from './types';

// Initialize i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: Language.EN,
  fallbackLng: Language.EN,
  resources: {
    en: { translation: messages },
  },
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['queryString', 'cookie'],
    caches: ['cookie'],
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
