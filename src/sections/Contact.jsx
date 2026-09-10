import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kenfdurel10@gmail.com",
    href: "mailto:kenfdurel10@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 64 04 18 13",
    href: "tel:+33664041813",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Paris, France",
    href: "https://www.google.com/maps/place/Paris,+France",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Le formulaire de contact n’est pas encore configuré.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Votre message a bien été envoyé. Je vous répondrai rapidement.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text ||
          "L’envoi n’a pas abouti. Vous pouvez me contacter directement par email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Échangeons sur
            <span className="font-serif italic font-normal text-white">
              {" "}vos besoins et vos projets.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Vous recherchez un stagiaire en IA/Data ou en développement logiciel,
            ou vous préparez vos recrutements en alternance pour 2027 ? Contactez-moi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nom@email.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                  placeholder="Votre message"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours…" : "Envoyer le message"}
                {!isLoading && <Send className="w-5 h-5" />}
              </Button>

              {submitStatus.type && (
                <div
                  role="status"
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Coordonnées</h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6 md:p-8 border border-primary/30">
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                Objectif actuel
              </p>
              <h3 className="text-xl font-semibold mt-2">Stage 2026–2027</h3>
              <p className="text-muted-foreground mt-3">
                Je recherche une expérience en intelligence artificielle, data
                science ou développement logiciel pour mettre en pratique mes acquis.
              </p>
              <div className="h-px bg-border my-6" />
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                Prochaine étape
              </p>
              <h3 className="text-xl font-semibold mt-2">Alternance • rentrée 2027</h3>
              <p className="text-muted-foreground mt-3">
                Je prépare dès cette année un profil solide et documenté pour intégrer
                une équipe en IA/Data ou en développement logiciel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
