import { Palette, Layout, Smartphone, Sparkles } from "lucide-react";

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
  return (
    <section id="services" className="py-16 md:py-32 bg-card/50 px-4 md:px-0">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-5 md:p-8 rounded-xl md:rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-foreground flex items-center justify-center mb-4 md:mb-6 group-hover:shadow-glow transition-shadow">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3">
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
