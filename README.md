# Portfolio — Enmanuel Hurtado (React + Vite)

**Sitio en vivo:** https://enmanuel676.github.io/web_portfolio/

Migración a React del portfolio original en HTML/CSS/JS (`../web_portfolio`).
Mismo diseño brutalista minimalista, ahora en componentes.

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # sirve el build
npm run lint     # eslint
```

`dev` y `preview` sirven la página bajo `/web_portfolio/`, el mismo prefijo que
en producción, así que la URL local es `http://localhost:5173/web_portfolio/`.

## Despliegue en GitHub Pages

GitHub Pages no ejecuta Vite: sólo sirve archivos. Lo que hay que publicar es el
contenido de `dist/`, no el código fuente. De eso se encarga
`.github/workflows/deploy.yml`, que en cada push a `main` instala, compila y
sube `dist/` a Pages.

Para activarlo, una sola vez: **Settings → Pages → Source = "GitHub Actions"**.

El proyecto se sirve desde una subcarpeta (`/web_portfolio/`), así que
`vite.config.js` fija `base` a esa ruta. El workflow la sobreescribe con
`VITE_BASE` usando el nombre real del repositorio, para que siga funcionando si
el repositorio se renombra.

## Estructura

- `src/components/` — un componente por sección: `Header` (hero), `About`,
  `Projects`, `Skills`, `Contact` (incluye `Footer`), `NavBar` y `Controls`.
  `ProjectModal` renderiza el popup de detalles de cada proyecto.
- `src/i18n/` — traducción español / inglés. `translations.js` guarda todo el
  texto visible y los dos enlaces del CV; `LanguageProvider.jsx` mantiene el
  idioma activo y `languageContext.js` expone el hook `useLanguage`.
- `src/data/projects.js` — datos e imágenes de los proyectos y del contenido de
  sus modales. Añadir un proyecto es añadir un objeto a este array.
- `src/hooks/` — `useAppearance` (tema claro/oscuro y barra glass/solid, con
  persistencia en `localStorage`) y `useActiveSection` (resalta el item del nav
  de la sección visible, vía `IntersectionObserver`).
- `src/utils/smoothScroll.js` — scroll suave con easing, portado del
  `components/main.js` original.
- `src/assets/styles/` — un archivo CSS por componente más `base.css` y
  `common.css`. `index.css` los importa todos y es el único que carga `main.jsx`.
- `src/assets/images/` — imágenes importadas por los componentes, para que Vite
  las procese en el build.

## Idiomas

El tercer botón flotante de la esquina superior izquierda (`EN` / `ES`) cambia
el idioma de toda la página. La elección se guarda en `localStorage` y también
actualiza `<html lang>`, el título y la meta description del documento.

El botón **CV** del hero apunta al currículum del idioma activo: la versión en
español cuando la página está en español y la versión en inglés cuando está en
inglés. Los dos enlaces están en `CV_LINKS`, dentro de `src/i18n/translations.js`.

## Qué cambió respecto al original

- El JS imperativo (`main.js`) pasó a hooks y estado de React: el tema y el
  estilo de barra siguen aplicándose como clases en `<body>` porque el CSS
  depende de ellas.
- Los cinco modales duplicados en el HTML son ahora un solo `ProjectModal`
  alimentado por `projects.js`.
- Los enlaces de email usan `mailto:` en lugar del enlace de redacción de Gmail.
