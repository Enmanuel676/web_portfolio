// Scroll suave con easing propio (portado de components/main.js del portfolio original).
const SCROLL_OFFSET = 96; // igual que scroll-margin-top

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollToY(targetY, duration = 720) {
  const startY = window.scrollY || 0;
  const diff = targetY - startY;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + diff * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function scrollToSelector(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + (window.scrollY || 0);
  smoothScrollToY(Math.max(0, top - SCROLL_OFFSET), 740);
}
