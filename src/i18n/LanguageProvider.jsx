import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContext.js";
import { CV_LINKS, translations } from "./translations.js";

const KEY_LANG = "portfolio_lang"; // "es" | "en"

function readStoredLang() {
  try {
    return localStorage.getItem(KEY_LANG) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  // El idioma también viaja al documento: <html lang>, <title> y la meta
  // description, que son lo que leen buscadores y lectores de pantalla.
  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.documentTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.documentDescription);
    try {
      localStorage.setItem(KEY_LANG, lang);
    } catch {
      /* almacenamiento no disponible */
    }
  }, [lang]);

  const toggleLanguage = useCallback(
    () => setLang((current) => (current === "es" ? "en" : "es")),
    []
  );

  const value = useMemo(
    () => ({ lang, t: translations[lang], cvLink: CV_LINKS[lang], toggleLanguage }),
    [lang, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
