"use client";

import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

// Simplified: no 3D tilt, just a clean card wrapper with CSS hover
export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return (
    <div
      className={`relative transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
