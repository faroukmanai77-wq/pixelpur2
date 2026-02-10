import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#projets", label: "Projets" },
    { href: "#apropos", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-3 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-foreground">
          Pixelpur<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-none text-sm font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Discutons
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
            aria-label="Menu"
          >
            <span
              className={`block w-full h-[2px] bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[11px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[11px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`font-display text-3xl font-bold text-foreground hover:text-primary transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-none text-sm font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 100}ms` : "0ms" }}
        >
          Discutons
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
