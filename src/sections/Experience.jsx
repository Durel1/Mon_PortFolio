import { BriefcaseBusiness, Code2 } from "lucide-react";

const technicalExperiences = [
  {
    period: "01/2024 – 06/2024",
    role: "Développeur full-stack – CDD",
    company: "CAM-TECH • Douala",
    description:
      "Développement d’applications web, conception d’API REST, intégration de services, gestion de bases de données et maintenance corrective.",
    technologies: ["JavaScript", "Applications web", "API REST", "Bases de données"],
  },
  {
    period: "05/2023 – 10/2023",
    role: "Stagiaire en développement informatique",
    company: "DIS BUSINESS GROUP • Douala",
    description:
      "Développement d’une application de gestion d’entreprise, mise en place des opérations CRUD et conception d’une interface fonctionnelle.",
    technologies: ["Python", "SQLite", "Tkinter", "CRUD"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Expériences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 text-secondary-foreground">
            Des premières missions
            <span className="font-serif italic font-normal text-white">
              {" "}aux projets d’ingénierie.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes expériences m’ont appris à produire, collaborer et progresser dans
            des contextes professionnels différents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-7">
          {technicalExperiences.map((experience) => (
            <article
              key={experience.role}
              className="glass p-6 md:p-8 rounded-2xl border border-primary/25"
            >
              <div className="flex items-center gap-3 text-primary text-sm font-medium mb-4">
                <Code2 className="w-5 h-5" />
                {experience.period}
              </div>
              <h3 className="text-2xl font-semibold">{experience.role}</h3>
              <p className="text-secondary-foreground mt-1">{experience.company}</p>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 bg-surface text-xs rounded-full text-muted-foreground border border-border"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-7 glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-5 border border-border">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <BriefcaseBusiness className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">Employé polyvalent • Job&Talent, Pontoise</h3>
              <span className="text-sm text-primary">Depuis 03/2026</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Une expérience complémentaire qui développe ma rigueur, mon sens de
              l’organisation, mon adaptation et ma capacité à travailler en équipe.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
