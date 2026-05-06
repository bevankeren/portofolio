"use client";

import { useRef, useState } from "react";
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
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

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
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
