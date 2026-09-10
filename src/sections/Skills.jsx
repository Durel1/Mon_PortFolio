import { Award, BrainCircuit, Code2, Database, Target } from "lucide-react";

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Intelligence artificielle & Data",
    description:
      "Analyser, structurer et exploiter les données pour répondre à un problème concret.",
    skills: ["Python", "pandas", "scikit-learn", "NetworkX", "Machine Learning"],
  },
  {
    icon: Code2,
    title: "Développement logiciel",
    description:
      "Concevoir des interfaces, des API et des applications maintenables de bout en bout.",
    skills: ["JavaScript", "TypeScript", "React", "FastAPI", "Java", "Spring Boot"],
  },
  {
    icon: Database,
    title: "Données & outils",
    description:
      "Construire des solutions versionnées, conteneurisées et connectées à des données fiables.",
    skills: ["SQL", "PostgreSQL", "MySQL", "Supabase", "Docker", "Git/GitHub"],
  },
];

const yearlyGoals = [
  "Approfondir l’IA et la data science par des projets appliqués.",
  "Valider mes acquis avec des certifications ciblées.",
  "Mettre ces compétences en pratique pendant mon stage obligatoire.",
  "Partager régulièrement mes réalisations sur GitHub et LinkedIn.",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Compétences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 text-secondary-foreground">
            Une double compétence
            <span className="font-serif italic font-normal text-white">
              {" "}qui se construit par la pratique.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Je consolide mes acquis en développement tout en approfondissant ma
            spécialisation en intelligence artificielle et data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass rounded-2xl p-6 border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <group.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-surface text-sm text-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mt-8">
          <div className="glass rounded-2xl p-6 md:p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Cap 2026–2027</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {yearlyGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Certifications obtenues</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="block text-foreground">GitHub Foundations</strong>
                Fondamentaux de Git, GitHub et de la collaboration.
              </li>
              <li>
                <strong className="block text-foreground">freeCodeCamp</strong>
                JavaScript Algorithms and Data Structures.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
