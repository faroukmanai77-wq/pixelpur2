const Footer = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-border px-4 md:px-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <a href="#" className="font-display text-lg md:text-xl font-bold">
          Pixelpur<span className="text-primary">.</span>
        </a>
        <p className="text-xs md:text-sm text-muted-foreground text-center">
          © 2025 Pixelpur — Création de sites vitrines à Montréal. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
