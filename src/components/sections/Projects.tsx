"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";

const filterActiveClasses = {
  all: "bg-accent-blue text-white shadow-neo-sm",
  data: "bg-accent-yellow text-black shadow-neo-sm",
  business: "bg-accent-pink text-white shadow-neo-sm",
  technical: "bg-accent-green text-white shadow-neo-sm",
} as const;

const cardBorderClasses = [
  "border-t-accent-green",
  "border-t-accent-yellow",
  "border-t-accent-blue",
  "border-t-accent-pink",
] as const;

const cardBadgeColors = ["green", "yellow", "blue", "pink"] as const;

export default function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("filter_all") },
    { key: "data", label: t("filter_data") },
    { key: "business", label: t("filter_business") },
    { key: "technical", label: t("filter_technical") },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const projectContent = [
    { title: t("project1_title"), desc: t("project1_desc"), badge: null },
    { title: t("project2_title"), desc: t("project2_desc"), badge: t("project2_badge") },
    { title: t("project3_title"), desc: t("project3_desc"), badge: t("project3_badge") },
    { title: t("project4_title"), desc: t("project4_desc"), badge: t("project4_badge") },
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="green"
        />

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 border-2 border-black rounded-neo font-heading font-bold text-sm transition-all ${
                activeFilter === filter.key
                  ? filterActiveClasses[filter.key as keyof typeof filterActiveClasses]
                  : "bg-surface hover:shadow-neo-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const content = projectContent[project.id - 1];
              const borderClass = cardBorderClasses[index % cardBorderClasses.length];
              const badgeColor = cardBadgeColors[index % cardBadgeColors.length];

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                >
                  <TiltCard
                    className={`neo-card border-t-[6px] ${borderClass} relative`}
                  >
                    {/* Placeholder badge */}
                    {content.badge && (
                      <div className="absolute top-4 right-4">
                        <Badge color="yellow">{content.badge}</Badge>
                      </div>
                    )}

                    {/* Project thumbnail placeholder */}
                    <div className="w-full h-40 bg-gray-100 border-2 border-black rounded-neo mb-4 flex items-center justify-center overflow-hidden">
                      {project.isPlaceholder ? (
                        <Lock size={32} className="text-gray-400" />
                      ) : (
                        <motion.span
                          className="text-4xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🤖
                        </motion.span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg mb-2">
                      {content.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {content.desc}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} color={badgeColor}>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-bold hover:text-accent-blue transition-colors"
                        >
                          <GithubIcon size={16} />
                          {t("source_code")}
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-bold hover:text-accent-green transition-colors"
                        >
                          <ExternalLink size={16} />
                          {t("live_demo")}
                        </a>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
