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
    <div className="text-center mb-12">
      <motion.h2
        className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-3"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={`w-20 h-1.5 ${underlineColorMap[color]} mx-auto rounded-full mb-4`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />
      {subtitle && (
        <motion.p
          className="text-text-secondary text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
