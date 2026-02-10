import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-none text-xs md:text-sm font-mono font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
        >
          Discutons
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
