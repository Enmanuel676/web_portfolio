import personPhoto from "../assets/images/person-photo.jpg";
import { useLanguage } from "../i18n/languageContext.js";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">{t.about.tag}</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">{t.about.title}</h2>
      </header>

      <div className="grid-2">
        <article className="card card-pad">
          <h3 className="h3 h3-about">{t.about.whoTitle}</h3>
          <img
            src={personPhoto}
            alt={t.about.photoAlt}
            className="card card-photo"
          />
          <p className="text muted">{t.about.p1}</p>
          <p className="text muted">{t.about.p2}</p>
          <p className="text muted">
            <span className="chip">{t.about.goals}</span>
          </p>
        </article>

        <article className="card card-pad card-pad-loking-for">
          <h3 className="h3">{t.about.lookingTitle}</h3>
          <ul className="list muted">
            {t.about.looking.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="divider-top">
            <a
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
              href="mailto:enmanuel676hd@gmail.com"
            >
              ✉ enmanuel676hd@gmail.com
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
