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
  return <section id="apropos" className="py-32 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              À propos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Designer passionné par l'innovation
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>Depuis 2023, je conçois des expériences digitales qui allient esthétique et fonctionnalité. Mon approche combine une compréhension profonde des besoins utilisateurs avec une sensibilité artistique unique.</p>
              <p>
                Chaque projet est une opportunité de créer quelque chose 
                d'exceptionnel. Je travaille en étroite collaboration avec mes 
                clients pour transformer leur vision en réalité digitale.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {stats.map(stat => <div key={stat.label}>
                  <div className="font-display text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract decorative element instead of photo */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-card via-card to-primary/10 border border-border relative overflow-hidden">
              {/* Geometric patterns */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-primary/20 rounded-full animate-pulse" />
                <div className="absolute w-32 h-32 border-2 border-primary/30 rounded-full" />
                <div className="absolute w-16 h-16 bg-gradient-primary rounded-full opacity-80" />
              </div>
              
              {/* Decorative lines */}
              <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
              
              {/* Central text element */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <span className="font-display text-6xl font-bold text-gradient mb-2">PP</span>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Pixelpur</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-60 blur-sm" />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;