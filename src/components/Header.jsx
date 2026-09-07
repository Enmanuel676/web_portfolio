import { scrollToSelector } from "../utils/smoothScroll.js";

function Header() {
  return (
    <section id="home" className="section">
      <div className="grid-hero">
        <article className="card card-pad">
          <h1 className="h1">Enmanuel Hurtado</h1>
          <p className="subhead">
            Desarrollador Web Full-Stack — Especializado en Front-End
          </p>
          <p className="text muted">
            Construyo apps web con enfoque práctico: UI limpia, lógica clara y
            resultados medibles.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => scrollToSelector("#projects")}
            >
              Ver proyectos
            </button>
            <a
              className="btn btn-ghost"
              href="https://drive.google.com/file/d/1UIIUVuQLVy6xK-FfcDNlozmYd71_q9Jh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
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
            <b>Brutalismo minimalista</b>: alto contraste, bordes duros, pocas
            florituras, mucha intención.
          </div>
        </article>

        <article className="card card-pad">
          <div className="kicker muted">STATUS</div>
          <h2 className="h2">Disponible para empleo / junior</h2>
          <p className="text muted">
            Me enfoco en proyectos con APIs, componentes reutilizables y
            fundamentos sólidos.
          </p>

          <div className="stack">
            <div className="kicker muted">STACK ACTUAL</div>
            <div className="chips">
              <span className="chip">Express.js 101</span>
              <span className="chip">Node.js</span>
              <span className="chip">React</span>
              <span className="chip">JavaScript</span>
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">APIs</span>
              <span className="chip">Git</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Header;
