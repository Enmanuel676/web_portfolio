# Portfolio — Enmanuel Hurtado (React + Vite)

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

## Estructura

- `src/components/` — un componente por sección: `Header` (hero), `About`,
  `Projects`, `Skills`, `Contact` (incluye `Footer`), `NavBar` y `Controls`.
  `ProjectModal` renderiza el popup de detalles de cada proyecto.
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

## Qué cambió respecto al original

- El JS imperativo (`main.js`) pasó a hooks y estado de React: el tema y el
  estilo de barra siguen aplicándose como clases en `<body>` porque el CSS
  depende de ellas.
- Los cinco modales duplicados en el HTML son ahora un solo `ProjectModal`
  alimentado por `projects.js`.
- Los enlaces de email usan `mailto:` en lugar del enlace de redacción de Gmail.
