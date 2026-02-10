import { Mail, MapPin, ArrowUpRight } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-32 relative overflow-hidden px-4 md:px-0">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8">
            Créons quelque chose
            <br />
            <span className="text-gradient glitch" data-text="d'extraordinaire">d'extraordinaire</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-12">
            Vous avez un projet en tête? Discutons-en et transformons votre vision en réalité.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-16">
            <a href="mailto:faroukmanai@hotmail.fr" className="group flex items-center gap-2 md:gap-3 bg-foreground text-background px-5 md:px-8 py-3 md:py-4 rounded-none font-mono font-bold uppercase tracking-wider hover:bg-foreground/90 transition-all text-sm md:text-base">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span className="truncate">faroukmanai@hotmail.fr</span>
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>Montréal, Qc</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
