import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  const isOpen = Boolean(project);

  // ESC cierra y el body no hace scroll detrás del modal.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const href = project.modalLink ?? project.link;

  return (
    <div
      className="modal open"
      id={project.id}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles ${project.name}`}
    >
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-panel card">
        <div className="modal-header">
          <div>
            <div className="kicker muted">PROYECTO</div>
            <div className="modal-title">{project.name}</div>
          </div>
          <button
            className="btn btn-ghost btn-icon"
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          <div>
            <div className="kicker muted">OBJETIVO</div>
            <p className="text muted">{project.objective}</p>
          </div>
          <div>
            <div className="kicker muted">TECNOLOGÍAS</div>
            <div className="chips">
              {project.tech.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="kicker muted">CÓMO SE HIZO</div>
            <p className="text muted">{project.how}</p>
          </div>
        </div>

        <div className="modal-actions">
          <a
            className="btn btn-primary"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {project.modalLinkLabel}
          </a>
          <button className="btn btn-ghost" type="button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
