import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Offshore Leaks – Analyse de réseaux",
    context: "Projet Data Science • ESIEA",
    description:
      "Analyse d’environ 810 000 entités issues des Offshore Leaks : préparation des données, modélisation de graphes, détection de communautés et identification d’anomalies.",
    image: "/projects/project1.png",
    tags: ["Python", "pandas", "NetworkX", "scikit-learn"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Durel1/Offshore_Leaks",
        icon: Github,
      },
      {
        label: "Source des données",
        href: "https://offshoreleaks.icij.org/",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "GetJob",
    context: "Application full-stack",
    description:
      "Plateforme mettant en relation étudiants et recruteurs, avec profils, offres, candidatures, authentification, stockage de CV et synchronisation des données en temps réel.",
    image: "/projects/project3.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [
      {
        label: "Voir la démo",
        href: "https://my-getjob-app.vercel.app/",
        icon: ArrowUpRight,
      },
      {
        label: "Voir le code",
        href: "https://github.com/Durel1/GetJob",
        icon: Github,
      },
    ],
  },
  {
    title: "Serveur MCP pour l’Esieabot",
    context: "IA, systèmes & robotique • ESIEA",
    description:
      "Serveur FastMCP permettant à une IA de piloter un robot à distance : commandes moteurs, caméra, ressources système et communication sécurisée par tunnel SSH.",
    image: "/projects/project4.png",
    tags: ["Python", "FastMCP", "Raspberry Pi", "SSH"],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Durel1/ServeurMCP_pour_esieabot",
        icon: Github,
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Projets sélectionnés
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Des réalisations qui montrent
            <span className="font-serif italic font-normal text-white">
              {" "}ma progression.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Chaque projet me permet de relier théorie, choix techniques et résultat
            utilisable, du traitement des données jusqu’à l’application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group glass rounded-2xl overflow-hidden flex flex-col border border-primary/10 hover:border-primary/35 transition-colors"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wider text-primary font-medium">
                  {project.context}
                </p>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-border/70">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Durel1?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AnimatedBorderButton>
              Voir tous mes projets
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
