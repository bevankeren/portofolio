"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPinned } from "lucide-react";
import { Link } from "@/i18n/routing";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

const cardBorderColors = [
  "border-t-accent-blue",
  "border-t-accent-pink",
  "border-t-accent-green",
] as const;
const badgeColors = ["blue", "pink", "green"] as const;

const categoryLabels: Record<string, string> = {
  technical: "IT",
  business: "BA",
  data: "DA",
};

export default function Projects() {
  const t = useTranslations("projects");

  const projectContent = [
    { title: t("project3_title"), desc: t("project3_desc") },
    { title: t("project1_title"), desc: t("project1_desc") },
    { title: t("project2_title"), desc: t("project2_desc") },
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="green"
        />

        <div className="space-y-8">
          {projects.map((project, index) => {
            const content = projectContent[index] ?? {
              title: "Project",
              desc: "",
            };
            const borderColor =
              cardBorderColors[index % cardBorderColors.length];
            const badgeColor = badgeColors[index % badgeColors.length];

            return (
              <motion.div
                key={project.id}
                className={`neo-card border-t-[6px] ${borderColor} ${
                  project.featured ? "bg-accent-yellow/10" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {project.featured && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-neo border-2 border-accent-yellow bg-accent-yellow px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-black">
                    <MapPinned size={14} />
                    {t("featured")}
                  </div>
                )}

                {project.images.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 mb-5 sm:grid-cols-2">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={img}
                        className="relative h-48 overflow-hidden rounded-neo border-2 border-black bg-gray-50 sm:h-56"
                      >
                        <Image
                          src={img}
                          alt={`${content.title} screenshot ${imgIndex + 1}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {project.images.length === 0 && (
                  <div className="mb-5 flex h-40 items-center justify-center rounded-neo border-2 border-black bg-gray-50">
                    <span className="font-heading text-5xl font-bold">
                      {categoryLabels[project.category] || "PR"}
                    </span>
                  </div>
                )}

                <h3 className="mb-2 font-heading text-xl font-bold">
                  {content.title}
                </h3>
                <p
                  className="mb-4 max-w-3xl text-sm leading-relaxed text-text-secondary"
                >
                  {content.desc}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      color={badgeColor}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.caseStudy && (
                    <Link
                      href={`/projects/${project.caseStudy}`}
                      className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-accent-purple"
                    >
                      <ArrowRight size={16} />
                      {t("case_study")}
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-accent-blue"
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
                      className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-accent-green"
                    >
                      <ExternalLink size={16} />
                      {t("live_demo")}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
