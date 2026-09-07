import { useEffect, useState } from "react";

const KEY_THEME = "portfolio_theme"; // "light" | "dark"
const KEY_NAV = "portfolio_nav_style"; // "glass" | "solid"

function readStored(key, expected, fallback) {
  try {
    return localStorage.getItem(key) === expected ? expected : fallback;
  } catch {
    return fallback;
  }
}

// Tema y estilo de la barra viven en <body>, igual que en el portfolio original,
// porque el CSS depende de body.theme-dark / body.nav-glass.
export function useAppearance() {
  const [theme, setTheme] = useState(() => readStored(KEY_THEME, "dark", "light"));
  const [navStyle, setNavStyle] = useState(() => readStored(KEY_NAV, "solid", "glass"));

  useEffect(() => {
    const { body } = document;
    body.classList.toggle("theme-dark", theme === "dark");
    body.classList.toggle("theme-light", theme === "light");
    try {
      localStorage.setItem(KEY_THEME, theme);
    } catch {
      /* almacenamiento no disponible */
    }
  }, [theme]);

  useEffect(() => {
    const { body } = document;
    body.classList.toggle("nav-glass", navStyle === "glass");
    body.classList.toggle("nav-solid", navStyle === "solid");
    try {
      localStorage.setItem(KEY_NAV, navStyle);
    } catch {
      /* almacenamiento no disponible */
    }
  }, [navStyle]);

  return {
    theme,
    navStyle,
    toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    toggleNavStyle: () => setNavStyle((s) => (s === "glass" ? "solid" : "glass")),
  };
}
