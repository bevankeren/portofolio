"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.15)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXVal = ((y - centerY) / centerY) * -8;
    const rotateYVal = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      whileHover={{ z: 50 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect that follows cursor */}
      <div
        className="absolute inset-0 rounded-neo opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
