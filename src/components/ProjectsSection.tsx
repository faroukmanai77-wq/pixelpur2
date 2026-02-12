import { ArrowUpRight } from "lucide-react";
import qualcoImage from "@/assets/qualco-management.webp";
import bapImage from "@/assets/bap.png";
import quosmosImage from "@/assets/quosmos.webp";
import comptableImage from "@/assets/comptable.jpg";
import finivoImage from "@/assets/Savings.png";
import aaosteoImage from "@/assets/aaosteo.jpg";



const projects = [
  { id: 1, title: "La Bande à Paul", category: "Site Vitrine", description: "Refonte complète du site d'une agence de scénographie", image: bapImage, color: "from-orange-500/20 to-amber-500/20", url: "https://labandeapaul.ca" },
  { id: 2, title: "Qualco Management", category: "Site Vitrine", description: "Création du site d'une entreprise de gestion immobilière", image: qualcoImage, color: "from-emerald-500/20 to-teal-500/20", url: "https://qualco.ca" },
  { id: 3, title: "Solutions Quosmos", category: "Site Vitrine", description: "Création du site d'une entreprise de distribution alimentaire", image: quosmosImage, color: "from-purple-500/20 to-pink-500/20", url: "https://quosmos.ca" },
  { id: 4, title: "Fiscpro Conseils", category: "Site Vitrine", description: "Création du site d'un comptable", image: comptableImage, color: "from-green-500/20 to-emerald-500/20", url: "https://fiscpro.ca" },
  { id: 5, title: "Finivo", category: "Site Vitrine", description: "La plateforme complète pour les Canadiens : comparez les cartes de crédit et plateformes de courtage, planifiez avec nos calculateurs", image: finivoImage, color: "from-blue-500/20 to-cyan-500/20", url: "https://finivo.ca" },
  { id: 6, title: "AAOsteo", category: "Site Vitrine", description: "Création du site d'une clinique de soins de santé à Brossard", image: aaosteoImage, color: "from-rose-500/20 to-red-500/20", url: "https://aaosteo.ca" },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-16 md:py-32 px-4 md:px-0">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
          <div>
            <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
              Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Projets sélectionnés
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Une sélection de mes travaux récents en design d'interface et expérience utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden bg-card cursor-pointer border border-border/30 hover:border-primary/40 transition-all duration-500 ${
                  isLarge ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
                }`}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10 group-hover:via-background/40 transition-all duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />

                {/* Number tag */}
                <div className="absolute top-4 left-4 font-mono text-xs text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <span className="text-primary text-[10px] md:text-xs font-medium tracking-widest uppercase mb-1 block">
                        {project.category}
                      </span>
                      <h3 className={`font-display font-bold mb-1 ${isLarge ? "text-xl md:text-3xl" : "text-lg md:text-xl"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-muted-foreground text-xs leading-relaxed ${isLarge ? "md:max-w-md" : "line-clamp-2"}`}>
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 bg-primary flex items-center justify-center flex-shrink-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-3 group-hover:translate-y-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
