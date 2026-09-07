import { useLanguage } from "../i18n/languageContext.js";
import { scrollToSelector } from "../utils/smoothScroll.js";

const stack = [
  "Express.js 101",
  "Node.js",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "APIs",
  "Git",
];

function Header() {
  // `cvLink` ya viene resuelto al idioma activo: CV en español o en inglés.
  const { t, cvLink } = useLanguage();

  return (
    <section id="home" className="section">
      <div className="grid-hero">
        <article className="card card-pad">
          <h1 className="h1">Enmanuel Hurtado</h1>
          <p className="subhead">{t.header.subhead}</p>
          <p className="text muted">{t.header.intro}</p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => scrollToSelector("#projects")}
            >
              {t.header.ctaProjects}
            </button>
            <a
              className="btn btn-ghost"
              href={cvLink}
              target="_blank"
              rel="noreferrer"
            >
              {t.header.ctaCv}
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/Enmanuel676"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/enmanuel-hurtado-batista"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="divider-top small muted">
            <b>{t.header.note1}</b>
            {t.header.note2}
          </div>
        </article>

        <article className="card card-pad">
          <div className="kicker muted">{t.header.statusKicker}</div>
          <h2 className="h2">{t.header.statusTitle}</h2>
          <p className="text muted">{t.header.statusText}</p>

          <div className="stack">
            <div className="kicker muted">{t.header.stackKicker}</div>
            <div className="chips">
              {stack.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Header;
