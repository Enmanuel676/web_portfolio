import { useActiveSection } from "../hooks/useActiveSection.js";
import { useLanguage } from "../i18n/languageContext.js";
import { scrollToSelector } from "../utils/smoothScroll.js";

const navItems = [
  {
    target: "#home",
    key: "home",
    path: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z",
  },
  {
    target: "#about",
    key: "about",
    path: "M20 21a8 8 0 1 0-16 0",
    circle: { cx: 12, cy: 8, r: 4 },
  },
  {
    target: "#projects",
    key: "projects",
    path: "M3 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z",
  },
  {
    target: "#skills",
    key: "skills",
    path: "M14.7 6.3a4.5 4.5 0 0 0-5.9 5.9L3 18l3 3 5.8-5.8a4.5 4.5 0 0 0 5.9-5.9l-3 3-2-2 3-3z",
  },
  {
    target: "#contact",
    key: "contact",
    path: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z",
  },
];

const sectionSelectors = navItems.map((item) => item.target);

function NavBar() {
  const active = useActiveSection(sectionSelectors);
  const { t } = useLanguage();

  return (
    <div className="nav-wrap">
      <nav className="nav-pill" aria-label={t.nav.aria}>
        {navItems.map((item) => {
          const label = t.nav[item.key];
          return (
            <button
              key={item.target}
              className={`nav-item${active === item.target ? " active" : ""}`}
              type="button"
              title={label}
              aria-label={label}
              aria-current={active === item.target ? "true" : undefined}
              onClick={() => scrollToSelector(item.target)}
            >
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d={item.path} />
                {item.circle && <circle {...item.circle} />}
              </svg>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;
