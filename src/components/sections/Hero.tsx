"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 dot-pattern overflow-hidden"
    >
      <div className="container-main grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-accent-yellow px-4 py-2 font-heading text-sm font-black shadow-neo-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Sparkles size={16} />
            {t("greeting")}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-text-primary mb-5 leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("name")}
          </motion.h1>

          <motion.div
            className="mb-5 inline-block rotate-[-1.5deg] border-3 border-black bg-accent-blue px-4 py-3 shadow-neo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
          >
            <p className="text-xl md:text-2xl font-heading font-black text-white">
              {t("tagline")}
            </p>
          </motion.div>

          <motion.p
            className="text-text-secondary text-lg mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button color="pink" href="/cv/CV-Bevan-Alqarana.pdf">
              <Download size={18} />
              {t("cta_cv")}
            </Button>
            <Button color="yellow" href="#projects">
              <FolderOpen size={18} />
              {t("cta_projects")}
            </Button>
            <Button variant="secondary" href="#contact">
              <Mail size={18} />
              {t("cta_contact")}
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white hover:bg-accent-purple/10 hover:shadow-neo-sm transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white hover:bg-accent-blue/10 hover:shadow-neo-sm transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -left-5 top-8 h-28 w-28 rounded-full border-3 border-black bg-accent-green" />
            <div className="absolute -right-5 bottom-10 h-24 w-24 rotate-12 border-3 border-black bg-accent-pink" />
            <div className="absolute right-8 -top-5 h-16 w-16 rounded-neo border-3 border-black bg-accent-purple" />

            <div className="relative z-10 border-3 border-black rounded-neo shadow-neo bg-accent-yellow p-4 rotate-[2deg]">
              <div className="h-[470px] md:h-[540px] border-3 border-black rounded-neo bg-white overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-full border-3 border-black bg-accent-blue/20">
                    <span className="font-heading text-5xl font-black">BA</span>
                  </div>
                  <p className="font-heading text-lg font-black">Photo Placeholder</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Replace with your portrait photo
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-6 z-20 rotate-[-4deg] rounded-full border-2 border-black bg-accent-blue px-5 py-2 font-heading text-sm font-black text-white shadow-neo-sm">
              IELTS Certified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
