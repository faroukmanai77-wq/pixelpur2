import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxe Commerce",
    category: "E-commerce",
    description: "Refonte complète d'une boutique de mode haut de gamme",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 2,
    title: "FinTrack App",
    category: "Application Mobile",
    description: "Application de gestion financière personnelle",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Artisan Studio",
    category: "Site Vitrine",
    description: "Portfolio pour un collectif d'artistes contemporains",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Green Energy",
    category: "Landing Page",
    description: "Campagne de sensibilisation environnementale",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
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
