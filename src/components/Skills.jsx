const skillGroups = [
  { title: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "BACKEND", items: ["Node.js", "Express.js"] },
  {
    title: "HERRAMIENTAS",
    items: ["Git", "GitHub", "Vite", "Figma (básico)", "Postman", "Vercel"],
  },
  { title: "APIs", items: ["Fetch", "REST", "Async/Await"] },
];

function Skills() {
  return (
    <section id="skills" className="section section-gap">
      <header className="section-header">
        <div className="section-title-row">
          <span className="tag">SKILLS</span>
          <span className="line"></span>
        </div>
        <h2 className="h2">Lo que uso y lo que domino</h2>
      </header>

      <div className="grid-3">
        {skillGroups.map((group) => (
          <article className="card card-pad" key={group.title}>
            <div className="kicker muted">{group.title}</div>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
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
