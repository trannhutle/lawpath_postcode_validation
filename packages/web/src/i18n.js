import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const lang = localStorage.getItem("lang");
const fallbackLng = lang ? [lang] : ["en"];
export const availableLanguages = {
  en: "English",
  vi: "Tiếng Việt",
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: true,
    whitelist: Object.keys(availableLanguages),

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
