import { ArrowUpRight } from "lucide-react";
import qualcoImage from "@/assets/qualco-management.webp";
import bapImage from "@/assets/bap.png";
import quosmosImage from "@/assets/quosmos.webp";
import comptableImage from "@/assets/comptable.jpg";


const projects = [
  {
    id: 1,
    title: "La Bande à Paul",
    category: "Site Vitrine",
    description: "Refonte complète du site d'une agence de scénographie",
    image: bapImage,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 2,
    title: "Qualco Management",
    category: "Site Vitrine",
    description: "Création du site d'une entreprise de gestion immobilière",
    image: qualcoImage,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Solutions Quosmos",
    category: "Site Vitrine",
    description: "Création du site d'une entreprise de distribution alimentaire",
    image: quosmosImage,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Fiscpro Conseils",
    category: "Site Vitrine",
    description: "Création du site d'un comptable",
    image: comptableImage,
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Projets sélectionnés
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Une sélection de mes travaux récents en design d'interface et expérience utilisateur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-card hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-primary text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
