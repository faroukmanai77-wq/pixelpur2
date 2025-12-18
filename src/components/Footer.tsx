const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-xl font-bold">
          Studio<span className="text-primary">.</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
