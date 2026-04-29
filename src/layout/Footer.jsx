import { Github, Linkedin, X, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Durel1?tab=repositories", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/durel-kenfack-017b952a1/", label: "LinkedIn" },
  { icon: X, href: "https://x.com/kenfdurel10", label: "X" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          <img src="/public/KD_Logo.png" alt="" className="h-10 w-auto" />
        </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Durel Kenfack. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
