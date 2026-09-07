import personPhoto from "../assets/images/person-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">SOBRE MÍ</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">Aprendo rápido, construyo más rápido</h2>
      </header>

      <div className="grid-2">
        <article className="card card-pad">
          <h3 className="h3 h3-about">Quién soy</h3>
          <img
            src={personPhoto}
            alt="Foto de Enmanuel Hurtado"
            className="card card-photo"
          />
          <p className="text muted">
            Soy desarrollador web en formación en TripleTen y especializado en
            Frontend. Me gusta aprender haciendo: construir, probar, corregir y
            volver a mejorar hasta que la interfaz se sienta simple y sólida.
          </p>
          <p className="text muted">
            He trabajado en proyectos como una landing responsiva, una librería
            web y una aplicación que consume una API, aplicando HTML, CSS,
            JavaScript y React.
          </p>
          <p className="text muted">
            <span className="chip">
              Objetivos: Entrar como junior y crecer construyendo.
            </span>
          </p>
        </article>

        <article className="card card-pad card-pad-loking-for">
          <h3 className="h3">Lo que busco</h3>
          <ul className="list muted">
            <li>Empleo / Junior con retos reales.</li>
            <li>
              Proyectos donde el código se revise, se mejore y se despliegue.
            </li>
            <li>Equipo que valore claridad, consistencia y aprendizaje.</li>
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
