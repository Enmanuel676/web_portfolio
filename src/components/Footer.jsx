import { scrollToSelector } from "../utils/smoothScroll.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="kicker muted">© 2026 Enmanuel</div>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => scrollToSelector("#home")}
        >
          ↑ Arriba
        </button>
      </div>
    </footer>
  );
}

export default Footer;
