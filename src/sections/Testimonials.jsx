import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    period: "09/2025 - En cours",
    degree: "Diplôme d'ingénieur software & data",
    school: "ESIEA",
    location: "Paris",
    description: "Formation d'ingénieur (Niveau Bac+3). Spécialisation approfondie en ingénierie logicielle, data science, et systèmes embarqués, avec une forte composante pratique et projets.",
    active: true,
  },
  {
    period: "09/2024 - 07/2025",
    degree: "Licence : Génie Logiciel",
    school: "IUT de Douala",
    location: "Douala",
    description: "Mention Bien. Consolidation des compétences en développement full-stack, conception d'architectures logicielles et gestion de bases de données.",
    active: false,
  },
  {
    period: "09/2022 - 07/2024",
    degree: "DUT : Génie Informatique",
    school: "IUT de Douala",
    location: "Douala",
    description: "Mention Assez Bien. Apprentissage des fondamentaux de la programmation, de l'algorithmique et du travail en équipe sur des projets informatiques.",
    active: false,
  },
];

export const Testimonials = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background decoration matching the original style */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Mon Parcours
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Formation{" "}
            <span className="font-serif italic font-normal text-white">
              académique.
            </span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/20 ml-4 md:ml-8">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 ml-8 md:ml-12 animate-fade-in`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Timeline Dot/Icon */}
                <span className={`absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-4 ring-background ${item.active ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]' : 'bg-secondary text-secondary-foreground glass'}`}>
                  <GraduationCap className="w-6 h-6" />
                </span>

                {/* Content Card - C'est ici que j'ai ajouté ml-10 md:ml-12 */}
                <div className={`glass ml-10 md:ml-12 p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 hover:-translate-y-1 ${item.active ? 'glow-border ring-1 ring-primary/30' : 'border border-primary/10'}`}>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex items-center text-secondary-foreground font-semibold text-lg mb-4">
                    <span className="mr-4">{item.school}</span>
                    <div className="flex items-center text-muted-foreground text-sm font-normal">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};