import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import translationsEng from '../locales/en/translation.json';
import translationsNo from '../locales/no/translation.json';
import translationsJp from '../locales/jp/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsEng
  },
  no: {
    translation: translationsNo
  },
  jp: {
    translation: translationsJp
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ['en', 'no', 'jp'],
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;