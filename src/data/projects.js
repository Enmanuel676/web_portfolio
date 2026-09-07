import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import projectBackend from "../assets/images/project-backend.png";
import losPinos from "../assets/images/los-pinos.png";

// Lo que no cambia con el idioma (id, imagen, enlaces, stack) vive en la raíz
// del objeto. Lo que sí cambia va en `text.es` / `text.en`.
export const projects = [
  {
    id: "modal-weather",
    name: "Around The U.S",
    badge: "React",
    image: project1,
    imageAlt: "Around The U.S",
    link: "https://enmanuel676.github.io/web_project_around_react/",
    tech: ["React", "API", "CSS", "HTML", "Vite"],
    text: {
      es: {
        linkLabel: "Ir a la página ↗",
        modalLinkLabel: "Ver Página ↗",
        objective:
          "Demostración de perfil de red social, publicaciones añadidas y una UI limpia",
        how: "Fetch + loading/post + componentes reutilizables.",
      },
      en: {
        linkLabel: "Go to the site ↗",
        modalLinkLabel: "View site ↗",
        objective:
          "Social network profile demo, with added posts and a clean UI",
        how: "Fetch + loading/post + reusable components.",
      },
    },
  },
  {
    id: "modal-task",
    name: "De Patria a Patria",
    badge: "CSS",
    image: project2,
    imageAlt: "De Patria a Patria",
    link: "https://enmanuel676.github.io/web_project_4/",
    tech: ["CSS", "HTML", "Responsive Web Desing (RWD)"],
    text: {
      es: {
        linkLabel: "Ir a la página ↗",
        modalLinkLabel: "Ver Página ↗",
        objective:
          "Galería de arte e historia de ciudades de donde viven colegas de la academia TripleTen (Practicum)",
        how: "UI responsiva + persistencia + UX minimalista.",
      },
      en: {
        linkLabel: "Go to the site ↗",
        modalLinkLabel: "View site ↗",
        objective:
          "Art and history gallery of the cities where classmates from the TripleTen (Practicum) academy live",
        how: "Responsive UI + persistence + minimalist UX.",
      },
    },
  },
  {
    id: "modal-shop",
    name: "Triple Espresso",
    badge: "CSS",
    image: project3,
    imageAlt: "Triple Espresso",
    link: "https://enmanuel676.github.io/web_project_3/",
    tech: ["HTML", "CSS"],
    text: {
      es: {
        linkLabel: "Ir a la página ↗",
        modalLinkLabel: "Ver Página ↗",
        objective:
          "Cafetería especializada en granos de cafe certificados y tostados localmente",
        how: "Enlaces Externos + formulario + UI Limpia",
      },
      en: {
        linkLabel: "Go to the site ↗",
        modalLinkLabel: "View site ↗",
        objective:
          "Coffee shop specialized in certified, locally roasted coffee beans",
        how: "External links + form + clean UI.",
      },
    },
  },
  {
    id: "modal-backend",
    name: "Backend API",
    badge: "Express.js",
    image: projectBackend,
    imageAlt: "Backend API",
    link: "https://github.com/Enmanuel676/web_project_around_express.git",
    tech: ["Node.js", "Express.js", "API REST", "Postman"],
    text: {
      es: {
        linkLabel: "Ver código ↗",
        modalLinkLabel: "Ver código ↗",
        objective:
          "API básica para consultar y entregar datos de usuarios desde una base de datos mediante el navegador o Postman.",
        how: "Rutas con Express + búsqueda por endpoints + respuestas JSON para consumir datos de usuarios.",
      },
      en: {
        linkLabel: "View code ↗",
        modalLinkLabel: "View code ↗",
        objective:
          "Basic API to query and serve user data from a database through the browser or Postman.",
        how: "Express routes + lookup by endpoint + JSON responses to consume user data.",
      },
    },
  },
  {
    id: "modal-lospinos",
    name: "Los Pinos",
    badge: "CSS",
    image: losPinos,
    imageAlt: "Los Pinos",
    link: "https://lospinoshlg.com",
    modalLink: "https://github.com/Enmanuel676/los-pinos_web_project.git",
    tech: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "Git"],
    text: {
      es: {
        linkLabel: "Ir a la página ↗",
        modalLinkLabel: "Ver código ↗",
        objective:
          "Sitio Web para promoción de Motel donde Los Pinos y la Naturaleza son los protagonistas",
        how: "Enlaces y Popups intuitivos. Interfaz minimalista y simple para una mejor experiencia de usuario. Acompañado de un diseño web responsivo, adaptado a la mayor cantidad de dispositivos. Este se encuentra alojado en Vercel bajo un dominio personalizado .com",
      },
      en: {
        linkLabel: "Go to the site ↗",
        modalLinkLabel: "View code ↗",
        objective:
          "Promotional website for a motel where the pines and nature take the lead",
        how: "Intuitive links and popups. A minimalist, simple interface for a better user experience, together with a responsive design adapted to as many devices as possible. It is hosted on Vercel under a custom .com domain.",
      },
    },
  },
];
