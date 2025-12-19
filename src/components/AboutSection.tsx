const AboutSection = () => {
  const stats = [{
    value: "2+",
    label: "Années d'expérience"
  }, {
    value: "10+",
    label: "Projets réalisés"
  }, {
    value: "10+",
    label: "Clients satisfaits"
  }];
  return <section id="apropos" className="py-16 md:py-32 relative overflow-hidden px-4 md:px-0">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 md:mb-4 tracking-wider uppercase text-xs md:text-sm">
              À propos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8">
              Designer passionné par l'innovation
            </h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground text-sm md:text-base">
              <p>Depuis 2023, je conçois des expériences digitales qui allient esthétique et fonctionnalité. Mon approche combine une compréhension profonde des besoins utilisateurs avec une sensibilité artistique unique.</p>
              <p>
                Chaque projet est une opportunité de créer quelque chose 
                d'exceptionnel. Je travaille en étroite collaboration avec mes 
                clients pour transformer leur vision en réalité digitale.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border">
              {stats.map(stat => <div key={stat.label}>
                  <div className="font-display text-2xl md:text-4xl font-bold text-gradient mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-card max-w-sm mx-auto lg:max-w-none">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-20 md:w-32 h-20 md:h-32 border-2 border-primary rounded-xl md:rounded-2xl -z-10" />
            <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-gradient-primary rounded-full opacity-60 blur-sm" />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;