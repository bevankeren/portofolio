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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {t("cta")}
            </p>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="neo-card !p-4 flex items-center gap-4 bg-accent-pink/10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 border-2 border-black rounded-neo bg-accent-pink text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">
                    {t("email")}
                  </p>
                  <p className="font-heading font-bold text-sm break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card !p-4 flex items-center gap-4 bg-accent-green/10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 border-2 border-black rounded-neo bg-accent-green text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">
                    {t("whatsapp")}
                  </p>
                  <p className="font-heading font-bold text-sm">0877 1789 6916</p>
                </div>
              </motion.a>

              <motion.div
                className="neo-card !p-4 flex items-center gap-4 bg-accent-blue/10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="neo-card"
            >
              {/* Web3Forms access key - replace with your own from https://web3forms.com */}
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
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm transition-shadow"
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
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm transition-shadow"
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
                    className="w-full px-4 py-3 border-2 border-black rounded-neo bg-background focus:outline-none focus:shadow-neo-sm transition-shadow resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {formStatus === "success" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-green rounded-neo bg-accent-green/10 text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={16} className="text-accent-green" />
                    {t("form_success")}
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    className="flex items-center gap-2 p-3 border-2 border-accent-pink rounded-neo bg-accent-pink/10 text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
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
