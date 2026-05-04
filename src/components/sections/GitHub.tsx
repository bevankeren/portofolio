"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function GitHubSection() {
  const t = useTranslations("github");

  return (
    <section id="github" className="section-padding bg-surface">
      <div className="container-main">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          color="purple"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="neo-card text-center bg-accent-purple/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 border-3 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
              <GithubIcon size={40} />
            </div>

            <h3 className="font-heading font-black text-2xl mb-2">
              @bevankeren
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-4 border-2 border-black rounded-neo bg-accent-blue/10 shadow-neo-sm">
                <p className="text-3xl font-heading font-bold text-accent-blue">
                  GitHub
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {t("repos")}
                </p>
              </div>
              <div className="p-4 border-2 border-black rounded-neo bg-accent-green/10 shadow-neo-sm">
                <p className="text-3xl font-heading font-bold text-accent-green">
                  Stats
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {t("contributions")}
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6 p-4 border-2 border-black rounded-neo bg-white hover:shadow-neo-sm transition-all"
              aria-label="Open GitHub profile"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=bevankeren&show_icons=true&theme=default&hide_border=true&bg_color=FFFDF7&title_color=8B5CF6&icon_color=EC4899&text_color=1A1A1A"
                alt="GitHub Stats"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
            </a>

            <Button color="purple" href={personalInfo.github}>
              <GithubIcon size={18} />
              {t("view_profile")}
              <ExternalLink size={14} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
