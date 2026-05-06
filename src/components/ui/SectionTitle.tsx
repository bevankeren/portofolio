"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: "blue" | "yellow" | "pink" | "green" | "purple";
}

const underlineColorMap = {
  blue: "bg-accent-blue",
  yellow: "bg-accent-yellow",
  pink: "bg-accent-pink",
  green: "bg-accent-green",
  purple: "bg-accent-purple",
};

export default function SectionTitle({
  title,
  subtitle,
  color = "blue",
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12 overflow-hidden">
      {/* Title with clip-path reveal */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-3"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h2>
      </motion.div>

      {/* Animated underline that draws itself */}
      <motion.div
        className={`h-1.5 ${underlineColorMap[color]} mx-auto rounded-full mb-4`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {subtitle && (
        <motion.p
          className="text-text-secondary text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
