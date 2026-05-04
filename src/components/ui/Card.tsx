"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  accentColor?: "blue" | "yellow" | "pink" | "green" | "purple";
  accentPosition?: "top" | "left" | "none";
}

const accentColorMap = {
  blue: "border-t-accent-blue",
  yellow: "border-t-accent-yellow",
  pink: "border-t-accent-pink",
  green: "border-t-accent-green",
  purple: "border-t-accent-purple",
};

const accentLeftColorMap = {
  blue: "border-l-accent-blue",
  yellow: "border-l-accent-yellow",
  pink: "border-l-accent-pink",
  green: "border-l-accent-green",
  purple: "border-l-accent-purple",
};

export default function Card({
  children,
  className = "",
  accentColor,
  accentPosition = "none",
}: CardProps) {
  const accentClass =
    accentColor && accentPosition === "top"
      ? `border-t-[6px] ${accentColorMap[accentColor]}`
      : accentColor && accentPosition === "left"
      ? `border-l-[6px] ${accentLeftColorMap[accentColor]}`
      : "";

  return (
    <motion.div
      className={`neo-card ${accentClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
