import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import translationsEng from '../locales/en/translation.json';
import translationsNo from '../locales/no/translation.json';
import translationsJp from '../locales/ja/translation.json';

const resources = {
  en: {
    translation: translationsEng
  },
  no: {
    translation: translationsNo
  },
  ja: {
    translation: translationsJp
  },
};

const options = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',

  // cache user language
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: options,
    fallbackLng: "en",
    supportedLngs: ['en', 'no', 'ja'],
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;