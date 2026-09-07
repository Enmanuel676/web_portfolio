import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import projectBackend from "../assets/images/project-backend.png";
import losPinos from "../assets/images/los-pinos.png";

export const projects = [
  {
    id: "modal-weather",
    name: "Around The U.S",
    badge: "React",
    image: project1,
    imageAlt: "Around The U.S",
    link: "https://enmanuel676.github.io/web_project_around_react/",
    linkLabel: "Ir a la página ↗",
    modalLinkLabel: "Ver Página ↗",
    objective:
      "Demostración de perfil de red social, publicaciones añadidas y una UI limpia",
    tech: ["React", "API", "CSS", "HTML", "Vite"],
    how: "Fetch + loading/post + componentes reutilizables.",
  },
  {
    id: "modal-task",
    name: "De Patria a Patria",
    badge: "CSS",
    image: project2,
    imageAlt: "De Patria a Patria",
    link: "https://enmanuel676.github.io/web_project_4/",
    linkLabel: "Ir a la página ↗",
    modalLinkLabel: "Ver Página ↗",
    objective:
      "Galería de arte e historia de ciudades de donde viven colegas de la academia TripleTen (Practicum)",
    tech: ["CSS", "HTML", "Responsive Web Desing (RWD)"],
    how: "UI responsiva + persistencia + UX minimalista.",
  },
  {
    id: "modal-shop",
    name: "Triple Espresso",
    badge: "CSS",
    image: project3,
    imageAlt: "Triple Espresso",
    link: "https://enmanuel676.github.io/web_project_3/",
    linkLabel: "Ir a la página ↗",
    modalLinkLabel: "Ver Página ↗",
    objective:
      "Cafetería especializada en granos de cafe certificados y tostados localmente",
    tech: ["HTML", "CSS"],
    how: "Enlaces Externos + formulario + UI Limpia",
  },
  {
    id: "modal-backend",
    name: "Backend API",
    badge: "Express.js",
    image: projectBackend,
    imageAlt: "Backend API",
    link: "https://github.com/Enmanuel676/web_project_around_express.git",
    linkLabel: "Ver código ↗",
    modalLinkLabel: "Ver código ↗",
    objective:
      "API básica para consultar y entregar datos de usuarios desde una base de datos mediante el navegador o Postman.",
    tech: ["Node.js", "Express.js", "API REST", "Postman"],
    how: "Rutas con Express + búsqueda por endpoints + respuestas JSON para consumir datos de usuarios.",
  },
  {
    id: "modal-lospinos",
    name: "Los Pinos",
    badge: "CSS",
    image: losPinos,
    imageAlt: "Los Pinos",
    link: "https://lospinoshlg.com",
    linkLabel: "Ir a la página ↗",
    modalLink: "https://github.com/Enmanuel676/los-pinos_web_project.git",
    modalLinkLabel: "Ver código ↗",
    objective:
      "Sitio Web para promoción de Motel donde Los Pinos y la Naturaleza son los protagonistas",
    tech: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "Git"],
    how: "Enlaces y Popups intuitivos. Interfaz minimalista y simple para una mejor experiencia de usuario. Acompañado de un diseño web responsivo, adaptado a la mayor cantidad de dispositivos. Este se encuentra alojado en Vercel bajo un dominio personalizado .com",
  },
];
