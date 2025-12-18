import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl">
          <p className="animate-fade-up text-primary font-medium mb-6 tracking-wider uppercase text-sm">
            Designer Web & UI/UX
          </p>
          
          <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            Je crée des
            <br />
            <span className="text-gradient">expériences</span>
            <br />
            digitales uniques
          </h1>
          
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
            Transformer vos idées en interfaces élégantes et intuitives qui captivent 
            vos utilisateurs et propulsent votre marque.
          </p>
          
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-glow"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <a href="#projets" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
