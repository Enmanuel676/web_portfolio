import { useEffect, useState } from "react";

const SCROLL_OFFSET = 96; // igual que scroll-margin-top y que utils/smoothScroll.js

// Marca el item del nav de la sección en la que está el usuario.
// Se calcula por posición y no con IntersectionObserver: con secciones de
// alturas muy distintas el observer comparaba solo las que cambiaban de
// visibilidad en cada callback, y el nav se quedaba marcando otra sección.
export function useActiveSection(selectors) {
  const [active, setActive] = useState(selectors[0] ?? "");

  useEffect(() => {
    let frame = 0;

    function compute() {
      frame = 0;
      const sections = selectors
        .map((selector) => ({ selector, el: document.querySelector(selector) }))
        .filter((item) => item.el);
      if (!sections.length) return;

      const scrollY = window.scrollY || 0;
      const atBottom =
        scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].selector);
        return;
      }

      // Línea de referencia: el borde superior útil del viewport.
      const line = scrollY + SCROLL_OFFSET + 1;
      let current = sections[0].selector;
      for (const { selector, el } of sections) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= line) current = selector;
      }
      setActive(current);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    }

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [selectors]);

  return active;
}
