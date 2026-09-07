import { useCallback, useState } from "react";
import { projects } from "../data/projects.js";
import { useLanguage } from "../i18n/languageContext.js";
import ProjectModal from "./ProjectModal.jsx";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const closeModal = useCallback(() => setOpenProject(null), []);
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">{t.projects.tag}</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">{t.projects.title}</h2>
        <p className="text muted">{t.projects.subtitle}</p>
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
                  {project.text[lang].linkLabel}
                </a>
                <button
                  className="btn btn-ghost btn-icon"
                  type="button"
                  onClick={() => setOpenProject(project)}
                  aria-label={`${t.projects.detailsAria} ${project.name}`}
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
