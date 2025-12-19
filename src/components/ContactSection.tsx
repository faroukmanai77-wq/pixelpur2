import { Mail, MapPin, ArrowUpRight } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Créons quelque chose
            <br />
            <span className="text-gradient">d'extraordinaire</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Vous avez un projet en tête? Discutons-en et transformons votre vision en réalité.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="mailto:faroukmanai@hotmail.fr" className="group flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-glow">
              <Mail className="w-5 h-5" />
              faroukmanai@hotmail.fr
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Montréal, Qc </span>
            </div>
          </div>
          
          {/* Social links */}
          {/* <div className="flex items-center justify-center gap-6">
            {["Dribbble", "Behance", "LinkedIn", "Twitter"].map(social => <a key={social} href="#" className="link-underline text-muted-foreground hover:text-foreground transition-colors text-sm">
                {social}
              </a>)}
          </div> */}
        </div>
      </div>
    </section>;
};
export default ContactSection;
