import Footer from "./Footer.jsx";
import { useLanguage } from "../i18n/languageContext.js";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">{t.contact.tag}</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">{t.contact.title}</h2>
        <p className="text muted">{t.contact.subtitle}</p>
      </header>

      <div className="grid-2">
        <article className="card card-pad">
          <h3 className="h3">{t.contact.emailTitle}</h3>
          <p className="text muted">{t.contact.emailText}</p>
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
          <h3 className="h3">{t.contact.linksTitle}</h3>
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
            <b>{t.contact.note}</b>
          </div>
        </article>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
