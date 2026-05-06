"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, Monitor } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, x: -40, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function CareerFocus() {
  const t = useTranslations("career");

  const careers = [
    {
      icon: Briefcase,
      titleKey: "ba_title",
      pointsKey: "ba_points",
      color: "blue" as const,
      bgColor: "bg-accent-blue/10",
      borderColor: "border-t-accent-blue",
    },
    {
      icon: BarChart3,
      titleKey: "da_title",
      pointsKey: "da_points",
      color: "yellow" as const,
      bgColor: "bg-accent-yellow/10",
      borderColor: "border-t-accent-yellow",
    },
    {
      icon: Monitor,
      titleKey: "it_title",
      pointsKey: "it_points",
      color: "green" as const,
      bgColor: "bg-accent-green/10",
      borderColor: "border-t-accent-green",
    },
  ];

  return (
    <section id="focus" className="section-padding dot-pattern">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="purple"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              className={`neo-card border-t-[6px] ${career.borderColor} ${career.bgColor}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-3 border-2 border-black rounded-neo bg-surface"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <career.icon size={24} />
                </motion.div>
                <h3 className="font-heading font-bold text-xl">
                  {t(career.titleKey)}
                </h3>
              </div>

              <ul className="space-y-2">
                {(t.raw(career.pointsKey) as string[]).map(
                  (point: string, i: number) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                    >
                      <span className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                      {point}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
