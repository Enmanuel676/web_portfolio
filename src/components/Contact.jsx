import Footer from "./Footer.jsx";

function Contact() {
  return (
    <section id="contact" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">CONTACTO</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">Hablemos</h2>
        <p className="text muted">Siempre disponible para cualquier consulta.</p>
      </header>

      <div className="grid-2">
        <article className="card card-pad">
          <h3 className="h3">Email</h3>
          <p className="text muted">Respondo más rápido por correo.</p>
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
            href="mailto:enmanuel676hd@gmail.com"
          >
            ✉ enmanuel676hd@gmail.com
          </a>
        </article>

        <article className="card card-pad">
          <h3 className="h3">Links</h3>
          <div className="hero-actions">
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
            <b>Pocas palabras. Proyectos sólidos. Enlaces que funcionen</b>
          </div>
        </article>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
