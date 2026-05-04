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
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-3">
        {title}
      </h2>
      <div
        className={`w-20 h-1.5 ${underlineColorMap[color]} mx-auto rounded-full mb-4`}
      />
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
