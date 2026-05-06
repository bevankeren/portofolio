"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

const contactCardVariants = {
  hidden: { opacity: 0, x: -40, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 150,
      damping: 15,
    },
  }),
};

export default function Contact() {
  const t = useTranslations("contact");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              className="text-text-secondary text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t("cta")}
            </motion.p>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className={`neo-card !p-4 flex items-center gap-4 ${item.bg}`}
                  custom={index}
                  variants={contactCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                    boxShadow: "8px 8px 0px #000",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`p-3 border-2 border-black rounded-neo ${item.iconBg} text-white`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="font-heading font-bold text-sm break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                className="neo-card !p-4 flex items-center gap-4 bg-accent-blue/10"
                custom={2}
                variants={contactCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  boxShadow: "8px 8px 0px #000",
                }}
              >
                <motion.div
                  className="p-3 border-2 border-black rounded-neo bg-accent-blue text-white"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">
                    {t("location")}
                  </p>
                  <p className="font-heading font-bold text-sm">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                <motion.div
                  animate={focusedField === "name" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                >
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  animate={focusedField === "email" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                >
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div
                  animate={focusedField === "message" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                >
                  <label className="block text-sm font-heading font-bold mb-1.5">
                    {t("form_message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm focus:border-accent-blue transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                {formStatus === "success" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-green rounded-neo bg-accent-green/10 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring" as const, stiffness: 200 }}
                  >
                    <CheckCircle size={16} className="text-accent-green" />
                    {t("form_success")}
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-pink rounded-neo bg-accent-pink/10 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring" as const, stiffness: 200 }}
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
                  <motion.span
                    animate={formStatus === "loading" ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" as const }}
                  >
                    <Send size={18} />
                  </motion.span>
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
