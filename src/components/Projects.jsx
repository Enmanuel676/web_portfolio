import { useCallback, useState } from "react";
import { projects } from "../data/projects.js";
import ProjectModal from "./ProjectModal.jsx";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const closeModal = useCallback(() => setOpenProject(null), []);

  return (
    <section id="projects" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">PROYECTOS</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">Tarjetas con demo + popup de detalles</h2>
        <p className="text muted">
          Botón “Ir a la página” + botón “!” para ver objetivo, tecnologías y
          explicación.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.id}>
            <div className="project-media">
              <img src={project.image} alt={project.imageAlt} />
              <span className="badge">{project.badge}</span>
            </div>
            <div className="project-body">
              <div className="project-name">{project.name}</div>
              <div className="project-actions">
                <a
                  className="btn btn-ghost project-btn"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                </a>
                <button
                  className="btn btn-ghost btn-icon"
                  type="button"
                  onClick={() => setOpenProject(project)}
                  aria-label={`Detalles de ${project.name}`}
                >
                  !
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={openProject} onClose={closeModal} />
    </section>
  );
}

export default Projects;
