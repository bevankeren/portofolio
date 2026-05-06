"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certificates() {
  const t = useTranslations("certificates");

  const certs = [
    {
      key: "cert1",
      descKey: "cert1_desc",
      borderClass: "border-t-accent-green",
      bgClass: "bg-accent-green/10",
      iconClass: "bg-accent-green text-white",
      verified: true,
    },
    {
      key: "cert2",
      borderClass: "border-t-accent-blue",
      bgClass: "bg-accent-blue/10",
      iconClass: "bg-accent-blue text-white",
      verified: false,
    },
    {
      key: "cert3",
      borderClass: "border-t-accent-purple",
      bgClass: "bg-accent-purple/10",
      iconClass: "bg-accent-purple text-white",
      verified: false,
    },
    {
      key: "cert4",
      borderClass: "border-t-accent-yellow",
      bgClass: "bg-accent-yellow/20",
      iconClass: "bg-accent-yellow text-black",
      verified: false,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.key}
              className={`neo-card text-center border-t-[6px] ${cert.borderClass} ${cert.bgClass}`}
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                y: -5,
                rotate: 1,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 border-2 border-black rounded-full ${cert.iconClass} flex items-center justify-center shadow-neo-sm`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {cert.verified ? <ShieldCheck size={30} /> : <Award size={28} />}
              </motion.div>
              <h3 className="font-heading font-black text-base mb-2">
                {t(cert.key)}
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-text-secondary">
                {cert.verified ? <ShieldCheck size={12} /> : <Clock size={12} />}
                <span>{cert.verified ? t("verified") : t("coming_soon")}</span>
              </div>
              <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                {cert.descKey ? t(cert.descKey) : t("placeholder_text")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
