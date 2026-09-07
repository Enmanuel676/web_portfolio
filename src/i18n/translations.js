// Todo el texto visible de la página, en los dos idiomas.
// La clave de primer nivel es el componente; así cada componente pide sólo su
// bloque (`t.header`, `t.about`, ...) y no hay que buscar por toda la lista.

export const CV_LINKS = {
  es: "https://drive.google.com/file/d/1S5duEROcYyGrOKOzjdz2Y01gpRydL7Ft/view?usp=share_link",
  en: "https://drive.google.com/file/d/15czyapjv1m-T5GM5tpb4Dr1AODSmneBu/view?usp=share_link",
};

export const translations = {
  es: {
    documentTitle: "Enmanuel Hurtado — Portfolio",
    documentDescription:
      "Portfolio de Enmanuel Hurtado, desarrollador web full-stack especializado en front-end.",

    controls: {
      themeToDark: "Cambiar a tema oscuro",
      themeToLight: "Cambiar a tema claro",
      themeAria: "Cambiar tema",
      navSolid: "Barra sólida",
      navGlass: "Barra translúcida",
      navAria: "Cambiar estilo de navegación",
      languageLabel: "EN",
      languageTitle: "Switch to English",
      languageAria: "Cambiar idioma a inglés",
    },

    nav: {
      aria: "Navegación",
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
    },

    header: {
      subhead: "Desarrollador Web Full-Stack — Especializado en Front-End",
      intro:
        "Construyo apps web con enfoque práctico: UI limpia, lógica clara y resultados medibles.",
      ctaProjects: "Ver proyectos",
      ctaCv: "CV",
      note1: "Brutalismo minimalista",
      note2:
        ": alto contraste, bordes duros, pocas florituras, mucha intención.",
      statusKicker: "STATUS",
      statusTitle: "Disponible para empleo / junior",
      statusText:
        "Me enfoco en proyectos con APIs, componentes reutilizables y fundamentos sólidos.",
      stackKicker: "STACK ACTUAL",
    },

    about: {
      tag: "SOBRE MÍ",
      title: "Aprendo rápido, construyo más rápido",
      whoTitle: "Quién soy",
      photoAlt: "Foto de Enmanuel Hurtado",
      p1: "Soy desarrollador web en formación en TripleTen y especializado en Frontend. Me gusta aprender haciendo: construir, probar, corregir y volver a mejorar hasta que la interfaz se sienta simple y sólida.",
      p2: "He trabajado en proyectos como una landing responsiva, una librería web y una aplicación que consume una API, aplicando HTML, CSS, JavaScript y React.",
      goals: "Objetivos: Entrar como junior y crecer construyendo.",
      lookingTitle: "Lo que busco",
      looking: [
        "Empleo / Junior con retos reales.",
        "Proyectos donde el código se revise, se mejore y se despliegue.",
        "Equipo que valore claridad, consistencia y aprendizaje.",
      ],
    },

    projects: {
      tag: "PROYECTOS",
      title: "Tarjetas con demo + popup de detalles",
      subtitle:
        "Botón “Ir a la página” + botón “!” para ver objetivo, tecnologías y explicación.",
      detailsAria: "Detalles de",
    },

    skills: {
      tag: "SKILLS",
      title: "Lo que uso y lo que domino",
      groups: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        tools: "HERRAMIENTAS",
        apis: "APIs",
      },
      figma: "Figma (básico)",
    },

    contact: {
      tag: "CONTACTO",
      title: "Hablemos",
      subtitle: "Siempre disponible para cualquier consulta.",
      emailTitle: "Email",
      emailText: "Respondo más rápido por correo.",
      linksTitle: "Links",
      note: "Pocas palabras. Proyectos sólidos. Enlaces que funcionen",
    },

    footer: {
      top: "↑ Arriba",
    },

    modal: {
      kicker: "PROYECTO",
      detailsAria: "Detalles",
      objective: "OBJETIVO",
      tech: "TECNOLOGÍAS",
      how: "CÓMO SE HIZO",
      close: "Cerrar",
    },
  },

  en: {
    documentTitle: "Enmanuel Hurtado — Portfolio",
    documentDescription:
      "Portfolio of Enmanuel Hurtado, full-stack web developer specialized in front-end.",

    controls: {
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme",
      themeAria: "Toggle theme",
      navSolid: "Solid bar",
      navGlass: "Translucent bar",
      navAria: "Toggle navigation style",
      languageLabel: "ES",
      languageTitle: "Cambiar a español",
      languageAria: "Switch language to Spanish",
    },

    nav: {
      aria: "Navigation",
      home: "Home",
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },

    header: {
      subhead: "Full-Stack Web Developer — Front-End Focused",
      intro:
        "I build web apps with a practical approach: clean UI, clear logic and measurable results.",
      ctaProjects: "See projects",
      ctaCv: "CV",
      note1: "Minimalist brutalism",
      note2: ": high contrast, hard edges, few frills, plenty of intent.",
      statusKicker: "STATUS",
      statusTitle: "Available for work / junior roles",
      statusText:
        "I focus on projects with APIs, reusable components and solid fundamentals.",
      stackKicker: "CURRENT STACK",
    },

    about: {
      tag: "ABOUT ME",
      title: "I learn fast, I build faster",
      whoTitle: "Who I am",
      photoAlt: "Photo of Enmanuel Hurtado",
      p1: "I'm a web developer training at TripleTen, specialized in front-end. I like learning by doing: build, test, fix and improve again until the interface feels simple and solid.",
      p2: "I have worked on projects such as a responsive landing page, a web library and an app that consumes an API, using HTML, CSS, JavaScript and React.",
      goals: "Goals: get in as a junior and grow by building.",
      lookingTitle: "What I'm looking for",
      looking: [
        "A junior job with real challenges.",
        "Projects where code is reviewed, improved and deployed.",
        "A team that values clarity, consistency and learning.",
      ],
    },

    projects: {
      tag: "PROJECTS",
      title: "Cards with a demo + details popup",
      subtitle:
        "“Go to the site” button + “!” button to see the goal, the tech stack and the explanation.",
      detailsAria: "Details of",
    },

    skills: {
      tag: "SKILLS",
      title: "What I use and what I master",
      groups: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        tools: "TOOLS",
        apis: "APIs",
      },
      figma: "Figma (basic)",
    },

    contact: {
      tag: "CONTACT",
      title: "Let's talk",
      subtitle: "Always available for any question.",
      emailTitle: "Email",
      emailText: "Email is the fastest way to reach me.",
      linksTitle: "Links",
      note: "Few words. Solid projects. Links that work",
    },

    footer: {
      top: "↑ Top",
    },

    modal: {
      kicker: "PROJECT",
      detailsAria: "Details",
      objective: "GOAL",
      tech: "TECHNOLOGIES",
      how: "HOW IT WAS BUILT",
      close: "Close",
    },
  },
};
