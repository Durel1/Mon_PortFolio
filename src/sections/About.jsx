import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code Maîtrisé",
    description:
      "Écrire un code propre, maintenable et structuré, en s'assurant de comprendre profondément chaque concept sous-jacent.",
  },
  {
    icon: Rocket,
    title: "Performance & Polyvalence",
    description:
      "Optimiser l'efficacité de chaque solution, de la fluidité des interfaces web au traitement de jeux de données massifs.",
  },
  {
    icon: Users,
    title: "CEsprit d'Équipe",
    description: "Collaborer efficacement au sein d'équipes multidisciplinaires, en valorisant la communication et le partage de connaissances.",
  },
  {
    icon: Lightbulb,
    title: "Curiosité & Innovation",
    description:
      "Maintenir une veille technologique constante pour intégrer les meilleures pratiques et les dernières avancées en IA, Data et développement.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                À propos de moi
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Comprendre l'invisible pour,
              <span className="font-serif italic font-normal text-white">
                {" "}
                construire des solutions d'impact.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Je suis un étudiant ingénieur passionné par la conception d'outils numériques complets
                 et intelligents. Mon parcours a débuté par une curiosité pour le développement web, 
                 et a rapidement évolué vers une expertise transverse mêlant développement logiciel, 
                 ingénierie des données et systèmes embarqués.
              </p>
              <p>
                De la création d'architectures backend (Python, Java) au développement d'interfaces interactives (React, Angular),
                ma philosophie technique est stricte : toujours maîtriser les concepts sous-jacents de mon code plutôt
                que de me limiter à leur simple application.
              </p>
              <p>
                Lorsque je ne suis pas en train de coder ou d'explorer de nouvelles documentations techniques, je m'investis dans les sports d'équipe comme le football ou le basket-ball, où je retrouve la même dynamique de collaboration et de stratégie que dans mes projets d'ingénierie. Je suis actuellement à la recherche d'une alternance de 2 ans à partir de septembre 2026, sur un rythme de 2 semaines / 2 semaines, pour évoluer en tant que développeur logiciel ou data scientist au sein d'une équipe stimulante.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Ma mission est de concevoir des applications où la complexité technique s'efface pour laisser place à des solutions robustes, fluides et véritablement utiles."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
