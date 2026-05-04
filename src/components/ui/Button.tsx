"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  color?: "blue" | "yellow" | "pink" | "green" | "purple";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const colorMap = {
  blue: "bg-accent-blue text-white",
  yellow: "bg-accent-yellow text-black",
  pink: "bg-accent-pink text-white",
  green: "bg-accent-green text-white",
  purple: "bg-accent-purple text-white",
};

export default function Button({
  children,
  variant = "primary",
  color = "blue",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses = "neo-btn inline-flex items-center justify-center gap-2";

  const variantClasses = {
    primary: colorMap[color],
    secondary: "bg-surface text-text-primary",
    outline: "bg-transparent text-text-primary",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
