import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 md:pt-20 px-4 md:px-0 scanlines">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-foreground/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-foreground/3 rounded-full blur-[128px]" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl">
          <p className="animate-fade-up text-primary font-medium mb-4 md:mb-6 tracking-wider uppercase text-xs md:text-sm font-mono cursor-blink">
            Designer Web & UI/UX
          </p>
          
          <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1] md:leading-[0.95] mb-6 md:mb-8 tracking-tight">
            Je crée des
            <br />
            <span className="text-gradient glitch" data-text="expériences">expériences</span>
            <br />
            digitales uniques
          </h1>
          
          <p className="animate-fade-up delay-200 text-base md:text-xl text-muted-foreground max-w-xl mb-8 md:mb-12">
            Transformer vos idées en interfaces élégantes et intuitives qui captivent 
            vos utilisateurs et propulsent votre marque.
          </p>
          
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#projets"
              className="bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-none font-mono font-bold uppercase tracking-wider hover:bg-foreground/90 transition-all text-center text-sm"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border-2 border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 rounded-none font-mono font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors text-center text-sm"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <a href="#projets" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div> */}
    </section>
  );
};

export default HeroSection;
