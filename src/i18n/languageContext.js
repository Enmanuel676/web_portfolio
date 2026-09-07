import { createContext, useContext } from "react";

// El contexto y su hook viven aparte del provider para que ese archivo sólo
// exporte componentes (lo que pide react-refresh).
export const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return context;
}
