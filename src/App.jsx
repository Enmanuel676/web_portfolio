import Controls from "./components/Controls.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import NavBar from "./components/NavBar.jsx";
import { useAppearance } from "./hooks/useAppearance.js";

function App() {
  const { theme, navStyle, toggleTheme, toggleNavStyle } = useAppearance();

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>

      <Controls
        theme={theme}
        navStyle={navStyle}
        onToggleTheme={toggleTheme}
        onToggleNavStyle={toggleNavStyle}
      />

      <div className="stamp">
        <div className="card stamp-card">
          <div className="stamp-title">PORTFOLIO v1.5</div>
        </div>
      </div>

      <main className="container">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <NavBar />
    </>
  );
}

export default App;
