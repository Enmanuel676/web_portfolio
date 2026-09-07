import { useLanguage } from "../i18n/languageContext.js";
import { scrollToSelector } from "../utils/smoothScroll.js";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="kicker muted">© 2026 Enmanuel</div>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => scrollToSelector("#home")}
        >
          {t.footer.top}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
