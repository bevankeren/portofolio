"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Languages, Network } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certificates() {
  const t = useTranslations("certificates");

  const certs = [
    {
      key: "cert1",
      descKey: "cert1_desc",
      borderClass: "border-t-accent-pink",
      bgClass: "bg-accent-pink/10",
      iconClass: "bg-accent-pink text-white",
      icon: Languages,
    },
    {
      key: "cert2",
      descKey: "cert2_desc",
      borderClass: "border-t-accent-green",
      bgClass: "bg-accent-green/10",
      iconClass: "bg-accent-green text-white",
      icon: Network,
    },
  ];

  return (
    <section id="certificates" className="section-padding dot-pattern">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="purple"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.key}
              className={`neo-card text-center border-t-[6px] ${cert.borderClass} ${cert.bgClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 border-2 border-black rounded-full ${cert.iconClass} flex items-center justify-center shadow-neo-sm`}
              >
                <cert.icon size={28} />
              </div>
              <h3 className="font-heading font-black text-base mb-2">
                {t(cert.key)}
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-accent-green mb-3">
                <ShieldCheck size={14} />
                <span>{t("verified")}</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {t(cert.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
