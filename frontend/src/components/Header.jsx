import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "How We Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/guarantee", label: "Guarantee" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDarkHero = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header
        id="siteHeader"
        className={scrolled ? "scrolled" : ""}
        data-hero={isDarkHero ? "dark" : undefined}
      >
        <div className="wrap nav">
          <Link to="/" className="brand">
            <img
              src="/assets/VelioHRlogo.png"
              className="logo-dark"
              alt="VelivoHR"
            />
            <img
              src="/assets/VelioHRlogoW.png"
              className="logo-white"
              alt="VelivoHR"
            />
          </Link>
          <nav className="nav-links">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={pathname.startsWith(to) ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="nav-cta">
            Start a Conversation
          </Link>
          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`}>
        {NAV.map(({ to, label }) => (
          <Link key={to} to={to} onClick={() => setMobileOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="nav-cta"
          onClick={() => setMobileOpen(false)}
        >
          Start a Conversation
        </Link>
      </div>
    </>
  );
}
