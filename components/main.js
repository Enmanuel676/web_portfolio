// ===== Settings =====
const KEY_THEME = "portfolio_theme"; // "light" | "dark"
const KEY_NAV = "portfolio_nav_style"; // "glass" | "solid"

const body = document.body;
const btnTheme = document.getElementById("btnTheme");
const btnNav = document.getElementById("btnNav");

// ===== Apply helpers =====
function setTheme(theme) {
  body.classList.toggle("theme-dark", theme === "dark");
  body.classList.toggle("theme-light", theme === "light");
  btnTheme.textContent = theme === "dark" ? "🔆" : "🌑";
  localStorage.setItem(KEY_THEME, theme);
}

function setNavStyle(style) {
  body.classList.toggle("nav-glass", style === "glass");
  body.classList.toggle("nav-solid", style === "solid");
  btnNav.textContent = style === "glass" ? "▦" : "▧";
  localStorage.setItem(KEY_NAV, style);
}

// ===== Init from storage (default: light + glass) =====
const savedTheme = localStorage.getItem(KEY_THEME);
const savedNav = localStorage.getItem(KEY_NAV);

setTheme(savedTheme === "dark" ? "dark" : "light");
setNavStyle(savedNav === "solid" ? "solid" : "glass");

// ===== Controls events =====
btnTheme.addEventListener("click", () => {
  const next = body.classList.contains("theme-dark") ? "light" : "dark";
  setTheme(next);
});

btnNav.addEventListener("click", () => {
  const next = body.classList.contains("nav-glass") ? "solid" : "glass";
  setNavStyle(next);
});

// ===== Smooth scroll with easing =====
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
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + diff * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function scrollToSelector(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + (window.scrollY || 0);
  const offset = 96; // igual que scroll-margin-top
  smoothScrollToY(Math.max(0, top - offset), 740);
}

// Delegation: cualquier cosa con data-scroll
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-scroll]");
  if (!target) return;
  e.preventDefault();
  scrollToSelector(target.getAttribute("data-scroll"));
});

// ===== Active section highlight in nav =====
const navItems = Array.from(
  document.querySelectorAll(".nav-item[data-scroll]")
);
const sectionEls = navItems
  .map((btn) => document.querySelector(btn.getAttribute("data-scroll")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    // escoge la sección más visible
    const visible = entries
      .filter((en) => en.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = "#" + visible.target.id;
    navItems.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-scroll") === id);
    });
  },
  { threshold: [0.2, 0.35, 0.5, 0.7] }
);

sectionEls.forEach((s) => observer.observe(s));

// ===== Modals (open/close + ESC) =====
const modals = Array.from(document.querySelectorAll(".modal"));

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal-open]");
  if (openBtn) {
    e.preventDefault();
    openModal(openBtn.getAttribute("data-modal-open"));
    return;
  }

  // cerrar por backdrop o botones
  const closeBtn = e.target.closest("[data-modal-close]");
  if (closeBtn) {
    const modal = e.target.closest(".modal");
    if (modal) closeModal(modal);
  }
});

// ESC cierra modal
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const opened = modals.find((m) => m.classList.contains("open"));
  if (opened) closeModal(opened);
});
