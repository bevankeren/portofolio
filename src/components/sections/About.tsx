"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  GraduationCap,
  Languages,
  MapPin,
  School,
  Sparkles,
  Wrench,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

const infoCards = [
  { icon: MapPin, label: "Location", key: "location", className: "bg-accent-pink" },
  { icon: GraduationCap, label: "University", key: "university", className: "bg-accent-blue" },
  { icon: BookOpen, label: "Current", key: "major", className: "bg-accent-green" },
  { icon: School, label: "School", key: "school", className: "bg-accent-yellow" },
] as const;

export default function About() {
  const t = useTranslations("about");
  const hardSkills = t.raw("hard_skills") as string[];
  const softSkills = t.raw("soft_skills") as string[];

  return (
    <section id="about" className="section-padding bg-surface overflow-hidden">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} color="pink" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <motion.div
            className="neo-card bg-accent-yellow/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-3 border-black bg-accent-blue" />
            <div className="absolute -bottom-8 right-20 h-20 w-20 rotate-12 border-3 border-black bg-accent-pink" />

            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border-2 border-black bg-accent-green px-4 py-2 font-heading text-sm font-black shadow-neo-sm">
                  {t("profile_tag_1")}
                </span>
                <span className="rounded-full border-2 border-black bg-accent-pink px-4 py-2 font-heading text-sm font-black text-white shadow-neo-sm">
                  {t("profile_tag_2")}
                </span>
                <span className="rounded-full border-2 border-black bg-accent-purple px-4 py-2 font-heading text-sm font-black text-white shadow-neo-sm">
                  {t("profile_tag_3")}
                </span>
              </div>

              <h3 className="mb-4 max-w-xl font-heading text-3xl font-black leading-tight md:text-4xl">
                Technical foundation,
                <span className="block text-accent-blue">analytical mindset,</span>
                <span className="block text-accent-pink">clear English communication.</span>
              </h3>

              <p className="mb-7 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                {t("bio")}
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {infoCards.map((card) => (
                  <div
                    key={card.key}
                    className="rounded-neo border-2 border-black bg-white p-4 shadow-neo-sm"
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-neo border-2 border-black ${card.className}`}>
                      <card.icon size={18} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                      {card.label}
                    </p>
                    <p className="font-heading text-sm font-bold leading-tight">
                      {t(card.key)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              className="neo-card bg-accent-blue/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-neo border-2 border-black bg-accent-blue p-3 text-white">
                  <Wrench size={22} />
                </div>
                <h3 className="font-heading text-xl font-black">{t("hard_title")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <Badge key={skill} color={index % 2 === 0 ? "blue" : "purple"}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="neo-card bg-accent-green/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-neo border-2 border-black bg-accent-green p-3 text-white">
                  <Brain size={22} />
                </div>
                <h3 className="font-heading text-xl font-black">{t("soft_title")}</h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 size={16} className="shrink-0 text-accent-green" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="neo-card border-l-[8px] border-l-accent-pink bg-accent-pink/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-neo border-2 border-black bg-accent-pink p-3 text-white">
                  <Languages size={24} />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-xl font-black">
                      {t("language_title")}
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-accent-yellow px-3 py-1 font-heading text-xs font-bold">
                      <Sparkles size={12} />
                      {t("ielts_label")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t("language_desc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
