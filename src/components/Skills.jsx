import { useLanguage } from "../i18n/languageContext.js";

// `key` apunta al título traducido; `items` sólo lleva nombres propios de
// tecnologías, que no se traducen (salvo el paréntesis de Figma).
const skillGroups = [
  { key: "frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { key: "backend", items: ["Node.js", "Express.js"] },
  {
    key: "tools",
    items: ["Git", "GitHub", "Vite", "figma", "Postman", "Vercel"],
  },
  { key: "apis", items: ["Fetch", "REST", "Async/Await"] },
];

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">{t.skills.tag}</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">{t.skills.title}</h2>
      </header>

      <div className="grid-3">
        {skillGroups.map((group) => (
          <article className="card card-pad" key={group.key}>
            <div className="kicker muted">{t.skills.groups[group.key]}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item === "figma" ? t.skills.figma : item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
