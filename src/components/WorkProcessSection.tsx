import { Search, PenTool, Code, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Découverte",
    description:
      "Analyse de vos besoins, de votre marché et de vos objectifs. On définit ensemble la stratégie et la structure idéale pour votre site vitrine.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Création de maquettes modernes et sur mesure. Chaque élément est pensé pour refléter votre image de marque et maximiser les conversions.",
  },
  {
    icon: Code,
    number: "03",
    title: "Développement",
    description:
      "Intégration pixel-perfect, responsive et optimisée pour le SEO. Votre site est rapide, accessible et conforme aux standards du web.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Livraison",
    description:
      "Mise en ligne, tests finaux et formation. Vous recevez un site clé en main, prêt à performer et à attirer de nouveaux clients.",
  },
];

const WorkProcessSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="processus"
      ref={sectionRef}
      className="py-16 md:py-32 px-4 md:px-0"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
            Processus
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Comment ça fonctionne
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Un processus clair et structuré pour livrer un site vitrine qui dépasse vos attentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-[2px] bg-border" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center text-center p-6 md:p-8"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number + Icon circle */}
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-2 border-border group-hover:border-primary/60 flex items-center justify-center transition-all duration-500 relative z-10">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <span className="absolute -top-2 -right-2 font-mono text-[10px] text-primary/70 bg-background px-1.5 py-0.5 border border-border z-20">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-lg md:text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Corner accents on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
