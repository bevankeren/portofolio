"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

const cardBorderColors = ["border-t-accent-blue", "border-t-accent-pink", "border-t-accent-green"] as const;
const badgeColors = ["blue", "pink", "green"] as const;

const categoryEmojis: Record<string, string> = {
  technical: "🤖",
  business: "📊",
  data: "📈",
};

export default function Projects() {
  const t = useTranslations("projects");

  const projectContent = [
    { title: t("project1_title"), desc: t("project1_desc") },
    { title: t("project2_title"), desc: t("project2_desc") },
    { title: t("project3_title"), desc: t("project3_desc") },
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
            const content = projectContent[index];
            const borderColor = cardBorderColors[index % cardBorderColors.length];
            const badgeColor = badgeColors[index % badgeColors.length];

            return (
              <motion.div
                key={project.id}
                className={`neo-card border-t-[6px] ${borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Images */}
                {project.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-48 sm:h-56 border-2 border-black rounded-neo overflow-hidden bg-gray-50"
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

                {/* No images fallback */}
                {project.images.length === 0 && (
                  <div className="h-40 border-2 border-black rounded-neo mb-5 bg-gray-50 flex items-center justify-center">
                    <span className="text-5xl">{categoryEmojis[project.category] || "💻"}</span>
                  </div>
                )}

                {/* Content */}
                <h3 className="font-heading font-bold text-xl mb-2">
                  {content.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed max-w-3xl">
                  {content.desc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} color={badgeColor}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
