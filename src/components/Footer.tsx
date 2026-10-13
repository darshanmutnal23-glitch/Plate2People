export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div>
          <div className="brand" style={{ color: "white" }}>
            <span className="logo" style={{ background: "var(--orange)" }}>
              ♥
            </span>
            <div>
              Plate<span>2</span>People
              <small style={{ color: "#d3e3d7" }}>Every Plate Counts</small>
            </div>
          </div>
          <p>Reduce waste. Share food. Strengthen communities.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#partners">Partner with us</a>
          <a href="#contact">Contact</a>
        </div>

        <p>© {year} Plate2People · Built with Next.js + Neon</p>
      </footer>

      <a className="btn mobile-cta" href="#contact">
        Partner With Us ↗
      </a>
    </>
  );
}
