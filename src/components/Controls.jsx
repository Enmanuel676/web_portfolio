import { useLanguage } from "../i18n/languageContext.js";

// Botones flotantes de tema, estilo de barra e idioma (antes #btnTheme / #btnNav).
// Los iconos son SVG en línea, con el mismo trazo que los del NavBar, en vez
// de emojis: se tiñen con currentColor y siguen al tema.
const icons = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  glass: (
    <>
      <path d="M12 3s6 6.1 6 10a6 6 0 0 1-12 0c0-3.9 6-10 6-10z" />
      <path d="M9 13.5h6M10 16.5h4" opacity="0.6" />
    </>
  ),
  solid: <rect x="3" y="7" width="18" height="10" rx="5" fill="currentColor" />,
};

function ControlIcon({ name }) {
  return (
    <svg
      // La key remonta el svg al cambiar de icono y relanza la animación.
      key={name}
      className="control-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Controls({ theme, navStyle, onToggleTheme, onToggleNavStyle }) {
  const { lang, t, toggleLanguage } = useLanguage();
  const isDark = theme === "dark";
  const isGlass = navStyle === "glass";

  return (
    <div className="controls">
      <button
        className="control-btn"
        type="button"
        title={isDark ? t.controls.themeToLight : t.controls.themeToDark}
        aria-label={t.controls.themeAria}
        aria-pressed={isDark}
        onClick={onToggleTheme}
      >
        <ControlIcon name={isDark ? "sun" : "moon"} />
      </button>
      <button
        className="control-btn"
        type="button"
        title={isGlass ? t.controls.navSolid : t.controls.navGlass}
        aria-label={t.controls.navAria}
        aria-pressed={isGlass}
        onClick={onToggleNavStyle}
      >
        <ControlIcon name={isGlass ? "solid" : "glass"} />
      </button>
      <button
        className="control-btn control-btn-lang"
        type="button"
        title={t.controls.languageTitle}
        aria-label={t.controls.languageAria}
        onClick={toggleLanguage}
      >
        {/* La key relanza la misma animación que usan los iconos. */}
        <span key={lang} className="control-lang">
          {t.controls.languageLabel}
        </span>
      </button>
    </div>
  );
}

export default Controls;
