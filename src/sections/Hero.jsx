import { useMemo } from "react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Python",
  "pandas",
  "scikit-learn",
  "NetworkX",
  "SQL",
  "React",
  "TypeScript",
  "FastAPI",
  "Java",
  "Spring Boot",
  "Supabase",
  "Docker",
  "Git",
];

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const Hero = () => {
  const dots = useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        id: i,
        left: seededRandom(i * 1.1) * 100,
        top: seededRandom(i * 2.2) * 100,
        duration: 15 + seededRandom(i * 3.3) * 20,
        delay: seededRandom(i * 4.4) * 5,
      })),
    [],
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/85 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full" />
              ESIEA • 4e année • Majeure IA & Data Science
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-in animation-delay-100">
                Durel Kenfack
                {/* Ajout des tailles de texte et de whitespace-nowrap ici */}
                <span className="block text-primary glow-text mt-2 text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                  Étudiant ingénieur
                </span>
                <span className="block font-serif italic font-normal text-white text-4xl md:text-5xl lg:text-6xl mt-3">
                  IA, Data & logiciel.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Je construis une double compétence en intelligence artificielle,
                data science et développement logiciel. Cette année, mon objectif
                est de consolider mes acquis par des projets concrets, des
                certifications ciblées et un stage, afin de préparer une alternance
                à la rentrée 2027.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm animate-fade-in animation-delay-300">
              <span className="glass rounded-full px-4 py-2 text-foreground">
                Recherche de stage • 2026–2027
              </span>
              <span className="glass rounded-full px-4 py-2 text-foreground">
                Alternance visée • rentrée 2027
              </span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Découvrir mes projets <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/CV_Durel_Kenfack.pdf" download="CV_Durel_Kenfack.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Retrouvez mon travail :</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/Durel1?tab=repositories",
                  label: "Profil GitHub de Durel Kenfack",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/durel-kenfack-017b952a1/",
                  label: "Profil LinkedIn de Durel Kenfack",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/My_profile_photo.png"
                  alt="Portrait de Durel Kenfack"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-5 right-2 sm:-right-5 glass-strong rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                    <span className="text-sm font-medium">
                      Stage 2026–2027 • Alternance 2027
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 left-2 sm:-left-4 glass-strong rounded-xl px-4 py-3">
                  <div className="text-xl font-bold text-primary">ESIEA</div>
                  <div className="text-xs text-muted-foreground">4e année</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-5 text-center">
            Technologies et domaines que je mobilise
          </p>
          <div className="relative overflow-hidden" aria-label="Compétences principales">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`${skill}-${idx}`} className="flex-shrink-0 px-7 py-4">
                  <span className="text-lg font-semibold text-muted-foreground/70">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-wider">Découvrir</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};
