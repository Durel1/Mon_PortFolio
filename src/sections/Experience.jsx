const experiences = [
  {
    period: "03/2026 — Présent",
    role: "Employé Polyvalent",
    company: "Job&Talent - Pontoise",
    description:
      "Évolution dans un environnement exigeant nécessitant le respect strict des délais et le maintien d'une cadence soutenue. Démontre une forte capacité d'organisation, de rigueur d'exécution, d'adaptation rapide à différents contextes et de travail en équipe.",
    technologies: ["Adaptabilité", "Rigueur", "Travail d'équipe", "Gestion du temps"],
    current: true,
  },
  {
    period: "01/2024 — 06/2024",
    role: "Développeur Full Stack (CDD)",
    company: "CAM-TECH - Douala",
    description:
      "Développement d'applications web full-stack et conception d'API REST pour l'intégration de services. Prise en charge de la gestion des bases de données et réalisation de la maintenance corrective pour assurer la stabilité des applications.",
    technologies: ["JavaScript", "React/Angular/Vue", "API REST", "Bases de données"],
    current: false,
  },
  {
    period: "05/2023 — 10/2023",
    role: "Apprenant Développeur (Stagiaire IT)",
    company: "DIS BUSINESS GROUP - Douala",
    description:
      "Conception d'une interface utilisateur fonctionnelle et développement d'une application complète de gestion d'entreprise. Mise en place d'une architecture CRUD et gestion de la base de données locale.",
    technologies: ["java", "Python", "SQLite", "Tkinter", "UI Design"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Parcours Professionnel
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            De la théorie{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              à la pratique 
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Une chronologie de mon évolution, de mes premiers pas en tant qu'apprenant développeur jusqu'à la conception d'applications full-stack en entreprise. Une progression guidée par la rigueur et l'envie d'apprendre en continu.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
