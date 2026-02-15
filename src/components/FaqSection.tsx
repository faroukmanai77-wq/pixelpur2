import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien coûte la création d'un site vitrine à Montréal ?",
    answer:
      "Le prix d'un site vitrine professionnel varie selon la complexité du projet, le nombre de pages et les fonctionnalités souhaitées. Chez Pixelpur, chaque projet est sur mesure. Contactez-moi pour obtenir un devis gratuit adapté à vos besoins.",
  },
  {
    question: "Quel est le délai pour créer un site vitrine ?",
    answer:
      "La création d'un site vitrine prend généralement entre 2 et 4 semaines. Ce délai inclut la phase de design, le développement, les révisions et la mise en ligne. Les projets plus complexes peuvent nécessiter un peu plus de temps.",
  },
  {
    question: "Mon site vitrine sera-t-il optimisé pour Google (SEO) ?",
    answer:
      "Absolument. Tous mes sites vitrines sont conçus avec le référencement naturel en tête : structure sémantique HTML, balises meta optimisées, performance rapide, design responsive et contenu structuré pour plaire aux moteurs de recherche.",
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles et tablettes ?",
    answer:
      "Oui, chaque site vitrine que je crée est 100% responsive. Il s'adapte parfaitement à tous les écrans — smartphone, tablette et desktop — pour offrir une expérience utilisateur optimale à tous vos visiteurs.",
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même après la livraison ?",
    answer:
      "Bien sûr. Je vous fournis les accès et vous explique comment effectuer les modifications courantes. Je reste également disponible pour tout accompagnement ou mise à jour future.",
  },
  {
    question: "Pourquoi choisir un site vitrine plutôt qu'un réseau social ?",
    answer:
      "Un site vitrine vous appartient, renforce votre crédibilité professionnelle et apparaît dans les résultats Google. Contrairement aux réseaux sociaux, vous contrôlez entièrement votre image, votre contenu et votre référencement.",
  },
];

const FaqSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" ref={sectionRef} className="py-16 md:py-32 bg-card/50 px-4 md:px-0">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Tout ce que vous devez savoir sur la création de votre site vitrine.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/50 bg-card px-5 md:px-6 data-[state=open]:border-primary/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors py-4 md:py-5 [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-4 md:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
