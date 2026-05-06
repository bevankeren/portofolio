"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

// Floating animation variants for decorative shapes
const floatingVariants = {
  circle: {
    y: [0, -12, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  square: {
    y: [0, 10, 0],
    rotate: [12, 18, 12],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  smallSquare: {
    y: [0, -8, 0],
    x: [0, 5, 0],
    rotate: [0, -10, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  badge: {
    y: [0, -4, 0],
    rotate: [-4, -2, -4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 dot-pattern overflow-hidden"
    >
      <div className="container-main grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-accent-yellow px-4 py-2 font-heading text-sm font-black shadow-neo-sm"
            variants={itemVariants}
          >
            <Sparkles size={16} />
            {t("greeting")}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-text-primary mb-5 leading-[0.95]"
            variants={itemVariants}
          >
            {t("name")}
          </motion.h1>

          <motion.div
            className="mb-5 inline-block rotate-[-1.5deg] border-3 border-black bg-accent-blue px-4 py-3 shadow-neo"
            variants={{
              hidden: { opacity: 0, scale: 0.9, rotate: -1.5 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: -1.5,
                transition: { duration: 0.5, ease: "easeOut" as const },
              },
            }}
          >
            <p className="text-xl md:text-2xl font-heading font-black text-white">
              {t("tagline")}
            </p>
          </motion.div>

          <motion.p
            className="text-text-secondary text-lg mb-8 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            {t("description")}
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 mb-8" variants={itemVariants}>
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

          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white hover:bg-accent-purple/10 hover:shadow-neo-sm hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black rounded-neo bg-white hover:bg-accent-blue/10 hover:shadow-neo-sm hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[420px]">
            {/* Floating decorative shapes */}
            <motion.div
              className="absolute -left-5 top-8 h-28 w-28 rounded-full border-3 border-black bg-accent-green"
              animate={floatingVariants.circle}
            />
            <motion.div
              className="absolute -right-5 bottom-10 h-24 w-24 border-3 border-black bg-accent-pink"
              animate={floatingVariants.square}
              style={{ borderRadius: "8px" }}
            />
            <motion.div
              className="absolute right-8 -top-5 h-16 w-16 rounded-neo border-3 border-black bg-accent-purple"
              animate={floatingVariants.smallSquare}
            />

            <div className="relative z-10 border-3 border-black rounded-neo shadow-neo bg-accent-yellow p-4 rotate-[2deg]">
              <div className="h-[470px] md:h-[540px] border-3 border-black rounded-neo bg-white overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-full border-3 border-black bg-accent-blue/20">
                    <span className="font-heading text-5xl font-black">BA</span>
                  </div>
                  <p className="font-heading text-lg font-black">
                    Photo Placeholder
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Replace with your portrait photo
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 left-6 z-20 rounded-full border-2 border-black bg-accent-blue px-5 py-2 font-heading text-sm font-black text-white shadow-neo-sm"
              animate={floatingVariants.badge}
            >
              IELTS Certified
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
