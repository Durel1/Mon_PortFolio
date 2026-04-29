import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Explorateur de Données Offshore Leaks",
    description:
      "Une plateforme d'exploration et d'analyse de données de réseaux massifs liés aux paradis fiscaux et à la transparence financière. Elle propose une visualisation graphique interactive, une recherche par entité et une détection d'anomalies, permettant de révéler des connexions cachées entre entreprises, individus et juridictions.",
    image: "/projects/project1.png",
    tags: ["Python", "Data Analysis", "Théorie des Graphes","Visualisation Interactive"],
    link: "https://offshoreleaks.icij.org/",
    github: "https://github.com/Durel1/Offshore_Leaks",
  },
  {
    title: "GetJob",
    description:
      "Une plateforme full-stack de recrutement connectant les étudiants et les recruteurs, intégrant une authentification sécurisée et la gestion des données en temps réel.React Supabase Real-time Data",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://my-getjob-app.vercel.app/",
    github: "https://github.com/Durel1/GetJob",
  },
   {
    title: "E-Commerce Platform",
    description:
      "Une solution e-commerce complète avec gestion des stocks, traitement des paiements et tableau de bord analytique.",
    image: "/projects/project2.png",
    tags: ["Angula","Tailwind", "PHP", "Laravel","MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Serveur MCP – Pilotage IA & Robotique",
    description:
      "Implémentation du Model Context Protocol (MCP) pour créer un pont sécurisé entre une IA et le monde physique, transformant un robot en un agent autonome capable d'explorer et d'analyser son environnement.",
    image: "/projects/project4.png",
    tags: ["Python", "FastMCP", "Raspberry Pi", "Claude AI"],
    link: "https://github.com/Durel1/ServeurMCP_pour_esieabot",
    github: "https://github.com/Durel1/ServeurMCP_pour_esieabot",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projets Phares
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Des réalisations
            <span className="font-serif italic font-normal text-white">
              {" "}
               qui ont de l'impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Une sélection de mes travaux récents, allant de l'analyse complexe de réseaux de données massifs au développement d'applications web complètes et d'architectures Cloud intégrant l'IA.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <a href="https://github.com/Durel1?tab=repositories">
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Voir tous Mes projets
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
        </a>
      </div>
    </section>
  );
};
