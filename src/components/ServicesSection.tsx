import { Palette, Layout, Smartphone, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Création d'interfaces utilisateur intuitives et esthétiques qui maximisent l'engagement.",
  },
  {
    icon: Layout,
    title: "Design Web",
    description: "Sites web modernes et responsifs qui reflètent l'identité unique de votre marque.",
  },
  {
    icon: Smartphone,
    title: "Design Mobile",
    description: "Applications mobiles fluides avec une expérience utilisateur optimale sur tous les appareils.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Identité visuelle cohérente et mémorable qui distingue votre marque de la concurrence.",
  },
];

const ServicesSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-32 bg-card/50 px-4 md:px-0">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
            Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Des solutions complètes de design pour donner vie à vos projets digitaux.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 md:p-8 bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />

              <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary/10 transition-colors duration-500">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
