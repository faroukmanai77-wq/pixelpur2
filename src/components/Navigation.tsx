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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-3 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-foreground z-50 relative">
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
        className={`fixed inset-0 bg-background flex flex-col transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`font-display text-4xl font-bold text-foreground hover:text-primary transition-all duration-500 py-3 border-b border-border/30 ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 100 + 150}ms` : "0ms" }}
            >
              <span className="text-primary/40 font-mono text-sm mr-3">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div
          className={`px-8 pb-12 transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? `${navLinks.length * 100 + 200}ms` : "0ms" }}
        >
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block w-full text-center bg-primary text-primary-foreground px-8 py-4 rounded-none text-sm font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Discutons
          </a>
          <p className="text-muted-foreground text-xs font-mono text-center mt-6 tracking-wider">
            CRÉATION DIGITALE & DESIGN
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
