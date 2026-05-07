"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const t = useTranslations("contact");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const contactItems = [
    {
      href: `mailto:${personalInfo.email}`,
      target: undefined,
      bg: "bg-accent-pink/10",
      iconBg: "bg-accent-pink",
      icon: Mail,
      label: t("email"),
      value: personalInfo.email,
    },
    {
      href: personalInfo.whatsapp,
      target: "_blank",
      bg: "bg-accent-green/10",
      iconBg: "bg-accent-green",
      icon: MessageCircle,
      label: t("whatsapp"),
      value: "0877 1789 6916",
    },
  ];

  return (
    <section id="contact" className="section-padding dot-pattern">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="pink"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {t("cta")}
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className={`neo-card !p-4 flex items-center gap-4 ${item.bg} hover:shadow-neo transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <div
                    className={`p-3 border-2 border-black rounded-neo ${item.iconBg} text-white`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="font-heading font-bold text-sm break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="neo-card !p-4 flex items-center gap-4 bg-accent-blue/10">
                <div className="p-3 border-2 border-black rounded-neo bg-accent-blue text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">
                    {t("location")}
                  </p>
                  <p className="font-heading font-bold text-sm">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="neo-card"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />
              <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {formStatus === "success" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-green rounded-neo bg-accent-green/10 text-sm font-medium"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle size={16} className="text-accent-green" />
                    {t("form_success")}
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-pink rounded-neo bg-accent-pink/10 text-sm font-medium"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle size={16} className="text-accent-pink" />
                    {t("form_error")}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  color="pink"
                  className={`w-full ${formStatus === "loading" ? "opacity-70 pointer-events-none" : ""}`}
                >
                  <Send size={18} />
                  {formStatus === "loading" ? t("form_sending") : t("form_send")}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
