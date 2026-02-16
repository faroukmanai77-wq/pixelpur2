import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Essentiel",
    price: "997",
    description: "Idéal pour les indépendants et petites entreprises qui veulent une présence en ligne professionnelle.",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design responsive (mobile, tablette, desktop)",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement inclus 1 an",
      "Livraison en 2 semaines",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "1 997",
    description: "Pour les PME qui veulent un site performant avec des fonctionnalités avancées.",
    features: [
      "Site vitrine jusqu'à 10 pages",
      "Design sur mesure premium",
      "SEO avancé + Google Analytics",
      "Animations & micro-interactions",
      "Intégration réseaux sociaux",
      "Hébergement inclus 1 an",
      "Support prioritaire 3 mois",
      "Livraison en 3 semaines",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "3 497",
    description: "Solution complète pour les entreprises exigeantes qui veulent se démarquer.",
    features: [
      "Site vitrine illimité en pages",
      "Design exclusif & branding complet",
      "SEO premium + stratégie de contenu",
      "Animations avancées & effets visuels",
      "Blog intégré",
      "Multilingue (FR/EN)",
      "Hébergement inclus 2 ans",
      "Support prioritaire 6 mois",
      "Livraison en 4 semaines",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="tarifs" ref={sectionRef} className="py-16 md:py-32 bg-card/50 px-4 md:px-0">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
            Tarifs
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Des forfaits clairs, sans surprise
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Choisissez l'offre qui correspond à vos besoins. Tous les forfaits incluent un site vitrine professionnel et optimisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative p-6 md:p-8 border transition-all duration-500 hover-lift overflow-hidden ${
                plan.highlighted
                  ? "bg-card border-primary/40 ring-1 ring-primary/20"
                  : "bg-card border-border/50 hover:border-primary/40"
              }`}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />

              {plan.highlighted && (
                <span className="absolute top-4 right-4 font-mono text-[10px] text-primary bg-primary/10 px-2 py-1 border border-primary/30 uppercase tracking-wider">
                  Populaire
                </span>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">$ CAD</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs md:text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 text-sm font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:border-primary/60 hover:text-primary"
                }`}
              >
                Demander un devis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
