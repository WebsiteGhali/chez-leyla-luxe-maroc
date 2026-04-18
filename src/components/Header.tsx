import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Prestations", to: "/prestations" },
  { label: "Spa & Hammam", to: "/spa-hammam" },
  { label: "Galerie", to: "/galerie" },
  { label: "Avis", to: "/avis" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        transparent
          ? "bg-transparent py-6"
          : "bg-ivory/95 backdrop-blur-md py-3 shadow-soft"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <Logo variant={transparent ? "light" : "dark"} />

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                transparent
                  ? "text-ivory/90 hover:text-champagne"
                  : location.pathname === item.to
                  ? "text-champagne-deep"
                  : "text-foreground hover:text-champagne-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="tel:+212610509938"
            className={`btn-luxe border ${
              transparent
                ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-noir"
                : "border-foreground text-foreground hover:bg-foreground hover:text-ivory"
            }`}
          >
            <Phone className="w-3 h-3 mr-2" strokeWidth={1.5} />
            Réserver
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${transparent ? "text-ivory" : "text-foreground"}`}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-ivory transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-6 pt-16 pb-12">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-serif text-3xl text-foreground hover:text-champagne-deep transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+212610509938"
            className="btn-luxe mt-6 bg-foreground text-ivory hover:bg-champagne-deep"
          >
            <Phone className="w-3 h-3 mr-2" strokeWidth={1.5} />
            06 10 50 99 38
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
