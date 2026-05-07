"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  const t = useTranslations("education");

  const timeline = [
    {
      icon: GraduationCap,
      name: t("uni_name"),
      subtitle: null,
      period: t("uni_period"),
      desc: t("uni_desc"),
      nodeClass: "bg-accent-blue",
      isCurrent: true,
    },
    {
      icon: School,
      name: t("school_name"),
      subtitle: t("school_major"),
      period: t("school_period"),
      desc: t("school_desc"),
      nodeClass: "bg-accent-green",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="section-padding bg-surface">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="blue"
        />

        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-10 pb-10 last:pb-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[18px] top-12 bottom-0 w-[3px] bg-black" />
              )}

              {/* Timeline node */}
              <div
                className={`absolute left-0 top-0 w-10 h-10 border-3 border-black rounded-full ${item.nodeClass} flex items-center justify-center`}
              >
                <item.icon size={18} className="text-white" />
              </div>

              {/* Content card */}
              <div className="neo-card ml-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-lg">
                    {item.name}
                  </h3>
                  <span className="text-xs font-mono font-bold px-2 py-1 border-2 border-black rounded-neo bg-accent-yellow/20">
                    {item.period}
                  </span>
                </div>
                {item.subtitle && (
                  <p className="text-sm font-medium text-accent-blue mb-2">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-text-secondary text-sm">{item.desc}</p>
                {item.isCurrent && (
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs font-bold bg-accent-green/20 text-accent-green border border-accent-green rounded-full">
                    Active
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
