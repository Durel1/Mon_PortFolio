import { BrainCircuit, Code2, GraduationCap, Users } from "lucide-react";

const profileMarkers = [
  {
    icon: GraduationCap,
    title: "4e année à l’ESIEA",
    description:
      "Deux années de formation pour approfondir mes compétences et construire un profil prêt pour l’entreprise.",
  },
  {
    icon: BrainCircuit,
    title: "Majeure IA & Data Science",
    description:
      "Une spécialisation centrée sur l’exploitation des données, l’apprentissage automatique et leurs applications.",
  },
  {
    icon: Code2,
    title: "Socle en développement",
    description:
      "Des bases solides en programmation, développement web, API et bases de données pour transformer une idée en produit.",
  },
  {
    icon: Users,
    title: "Esprit d'équipe & Curiosité",
    description:
      "Collaborer pour faire progresser les projets collectifs, tout en approfondissant continuellement de nouvelles compétences techniques.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Layout en 2 colonnes sur grand écran */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Colonne de gauche : Textes et Citation */}
          <div className="flex flex-col">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Mon profil
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-secondary-foreground">
              L’IA et la data comme spécialisation,
              <span className="font-serif italic font-normal text-white">
                {" "}le logiciel comme socle.
              </span>
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mon parcours a commencé par le génie informatique et le génie
                logiciel. À l’ESIEA, je développe aujourd’hui une spécialisation en
                intelligence artificielle et data science sans abandonner ce qui fait
                ma force : concevoir des applications complètes, structurées et utiles.
              </p>
              <p>
                Mon objectif est de savoir travailler sur toute la chaîne, de la
                préparation des données et l’expérimentation jusqu’à l’API et
                l’interface qui rendent la solution exploitable. Je documente aussi
                progressivement mes projets sur GitHub et LinkedIn.
              </p>
            </div>

            <div className="mt-10 glass rounded-2xl p-6 md:p-8 glow-border">
              <p className="text-xl font-medium text-foreground italic">
                "J’apprends en réalisant des projets concrets et en comprenant les choix techniques derrière chaque solution."
              </p>
            </div>
          </div>

          {/* Colonne de droite : Grille de 4 cartes (2x2) avec marge supérieure ajustée */}
          <div className="grid sm:grid-cols-2 gap-6 lg:mt-20">
            {profileMarkers.map((item) => (
              <article key={item.title} className="glass p-6 rounded-2xl border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};