"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const t = useTranslations("contact");

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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {t("cta")}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="neo-card !p-4 flex items-center gap-4 bg-accent-pink/10"
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
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card !p-4 flex items-center gap-4 bg-accent-green/10"
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
              </a>

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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              action={`mailto:${personalInfo.email}`}
              method="POST"
              encType="text/plain"
              className="neo-card"
            >
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

                <Button type="submit" color="pink" className="w-full">
                  <Send size={18} />
                  {t("form_send")}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
