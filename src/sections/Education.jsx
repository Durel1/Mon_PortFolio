import { Calendar, GraduationCap, MapPin } from "lucide-react";

const educationData = [
  {
    period: "Depuis 09/2025",
    degree: "Cycle ingénieur – Majeure IA & Data Science",
    school: "ESIEA",
    location: "Paris",
    description:
      "Actuellement en 4e année du cursus ingénieur. J’approfondis l’intelligence artificielle et la data science tout en consolidant mes compétences en ingénierie logicielle par la pratique et les projets.",
    active: true,
  },
  {
    period: "09/2024 – 07/2025",
    degree: "Licence en génie logiciel",
    school: "IUT de Douala",
    location: "Douala",
    description:
      "Mention Bien. Développement full-stack, conception logicielle et gestion de bases de données.",
    active: false,
  },
  {
    period: "09/2022 – 07/2024",
    degree: "DUT en génie informatique",
    school: "IUT de Douala",
    location: "Douala",
    description:
      "Mention Assez Bien. Acquisition des fondamentaux en programmation, algorithmique, bases de données et conduite de projets informatiques.",
    active: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Mon cursus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Formation
            <span className="font-serif italic font-normal text-white">
              {" "}académique.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/25 ml-4 md:ml-8">
            {educationData.map((item) => (
              <article key={item.degree} className="mb-10 ml-8 md:ml-12">
                <span
                  className={`absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-4 ring-background ${
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground glass"
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                </span>

                <div
                  className={`glass ml-5 md:ml-10 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    item.active
                      ? "glow-border ring-1 ring-primary/30"
                      : "border border-primary/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit shrink-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-secondary-foreground font-semibold text-lg mb-4">
                    <span>{item.school}</span>
                    <span className="flex items-center text-muted-foreground text-sm font-normal">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
